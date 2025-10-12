const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting the seeding process...');

  // Helper function to parse CSV data, handling BOM characters
  function parseCSV(filePath) {
    let csvData = fs.readFileSync(filePath, 'utf8');
    // Remove BOM character if present
    if (csvData.charCodeAt(0) === 0xfeff) {
      csvData = csvData.slice(1);
    }
    const lines = csvData.trim().split('\n');

    // Regex to split CSV row, handling quoted fields with commas
    const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;

    const headers = lines[0].split(regex).map(h => h.trim());

    return lines.slice(1).map(line => {
      const values = line.split(regex);
      return headers.reduce((obj, header, index) => {
        const value = (values[index] || '').trim();
        // Remove surrounding quotes from the value if they exist
        obj[header] =
          value.startsWith('"') && value.endsWith('"')
            ? value.slice(1, -1)
            : value;
        return obj;
      }, {});
    });
  }

  // Helper function to handle JSON parsing safely
  const safeJsonParse = jsonString => {
    if (typeof jsonString !== 'string') return [];
    // Attempt to fix common JSON-like string issues (e.g., double quotes)
    const correctedString = jsonString.replace(/""/g, '"');
    try {
      const parsed = JSON.parse(correctedString);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      // console.warn(`Could not parse JSON string: ${correctedString}`, e);
      return []; // Return empty array on failure to match Prisma schema String[]
    }
  };

  // 1. Clear existing data
  console.log('🗑️ Deleting existing data...');
  await prisma.testimonial.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.client.deleteMany({});
  await prisma.fAQ.deleteMany({});
  await prisma.newsletterSubscription.deleteMany({});
  await prisma.package.deleteMany({});
  await prisma.service.deleteMany({});
  await prisma.stat.deleteMany({});
  await prisma.teamMember.deleteMany({});
  await prisma.value.deleteMany({});
  console.log('✅ Existing data deleted.');

  // 2. Seed Clients
  const clientsData = parseCSV(
    path.join(__dirname, '../DB-data/clients_rows.csv')
  );
  await prisma.client.createMany({
    data: clientsData.map(c => ({
      id: c.id,
      name: c.name,
      country: c.country,
      flag: c.flag,
      avatar: c.avatar,
    })),
  });
  console.log(`✅ ${clientsData.length} Clients seeded.`);

  // 3. Seed FAQs
  const faqsData = parseCSV(path.join(__dirname, '../DB-data/faqs_rows.csv'));
  await prisma.fAQ.createMany({
    data: faqsData.map(f => ({
      id: f.id,
      question: f.question,
      answer: f.answer,
      category: f.category,
    })),
  });
  console.log(`✅ ${faqsData.length} FAQs seeded.`);

  // 4. Seed Newsletter Subscriptions
  const newsletterData = parseCSV(
    path.join(__dirname, '../DB-data/newsletter_subscriptions_rows.csv')
  );
  await prisma.newsletterSubscription.createMany({
    data: newsletterData.map(n => ({
      id: n.id,
      email: n.email,
    })),
  });
  console.log(`✅ ${newsletterData.length} Newsletter Subscriptions seeded.`);

  // 5. Seed Packages
  const packagesData = parseCSV(
    path.join(__dirname, '../DB-data/packages_rows.csv')
  );
  await prisma.package.createMany({
    data: packagesData.map(p => ({
      id: p.id,
      category: p.category,
      title: p.title,
      priceMin: parseFloat(p.price_min) || 0,
      priceMax: parseFloat(p.price_max) || 0,
      currency: p.currency,
      isMonthly: p.is_monthly === 'true',
      description: p.description,
      features: safeJsonParse(p.features),
      popular: p.popular === 'true',
    })),
  });
  console.log(`✅ ${packagesData.length} Packages seeded.`);

  // 6. Seed Services
  const servicesData = parseCSV(
    path.join(__dirname, '../DB-data/services_rows.csv')
  );
  await prisma.service.createMany({
    data: servicesData.map(s => ({
      id: s.id,
      title: s.title,
      description: s.description,
      price: s.price,
      category: s.category,
    })),
  });
  console.log(`✅ ${servicesData.length} Services seeded.`);

  // 7. Seed Stats
  const statsData = parseCSV(path.join(__dirname, '../DB-data/stats_rows.csv'));
  await prisma.stat.createMany({
    data: statsData.map(s => ({
      id: s.id,
      number: parseInt(s.number, 10),
      label: s.label,
      suffix: s.suffix || '',
    })),
  });
  console.log(`✅ ${statsData.length} Stats seeded.`);

  // 8. Seed Team Members
  const teamMembersData = parseCSV(
    path.join(__dirname, '../DB-data/team_members_rows.csv')
  );
  await prisma.teamMember.createMany({
    data: teamMembersData.map(tm => ({
      id: tm.id,
      name: tm.name,
      position: tm.position,
      description: tm.description,
      image: tm.image,
      social: safeJsonParse(tm.social),
    })),
  });
  console.log(`✅ ${teamMembersData.length} Team Members seeded.`);

  // 9. Seed Values
  const valuesData = parseCSV(
    path.join(__dirname, '../DB-data/values_rows.csv')
  );
  await prisma.value.createMany({
    data: valuesData.map(v => ({
      id: v.id,
      icon: v.icon,
      title: v.title,
      description: v.description,
    })),
  });
  console.log(`✅ ${valuesData.length} Values seeded.`);

  // 10. Generate and Seed Projects
  const seededClients = await prisma.client.findMany();
  if (seededClients.length >= 3) {
    const projects = [
      {
        title: 'هوية بصرية لمتجر "تميز"',
        category: 'branding',
        image: '/images/featured/1.png',
        thumbnail: '/images/thumbs/1.png',
        badge: 'الأكثر مشاهدة',
        liveUrl: '#',
        description:
          'إعادة تصميم الهوية البصرية لمتجر "تميز" لتعكس الجودة والفخامة، مع التركيز على تجربة مستخدم موحدة عبر جميع المنصات.',
        featured: true,
        tag: 'هوية بصرية',
        images: [
          '/images/gallery/1.png',
          '/images/gallery/2.png',
          '/images/gallery/3.png',
        ],
        challenge:
          'كان التحدي هو إنشاء هوية بصرية عصرية ومميزة يمكنها المنافسة في سوق مزدحم، مع الحفاظ على روح العلامة التجارية الأصلية.',
        solution:
          'قمنا بتطوير شعار جديد، ونظام ألوان وخطوط حديث، بالإضافة إلى مجموعة من القوالب والتصاميم التي يمكن استخدامها في التسويق والمواد المطبوعة.',
        results: [
          'زيادة بنسبة 30% في التفاعل على وسائل التواصل الاجتماعي',
          'تحسين التعرف على العلامة التجارية بنسبة 50%',
        ],
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
        clientInfo: {
          name: seededClients[0].name,
          service: 'هوية بصرية',
          year: '2023',
        },
      },
      {
        title: 'تطوير متجر "أناقة" الإلكتروني',
        category: 'web-development',
        image: '/images/featured/2.png',
        thumbnail: '/images/thumbs/2.png',
        badge: 'جديد',
        liveUrl: '#',
        description:
          'تطوير متجر إلكتروني متكامل لعلامة "أناقة" التجارية، مع التركيز على تجربة مستخدم سلسة وسرعة التحميل.',
        featured: true,
        tag: 'تطوير ويب',
        images: [
          '/images/gallery/4.png',
          '/images/gallery/5.png',
          '/images/gallery/6.png',
        ],
        challenge:
          'بناء متجر إلكتروني قادر على التعامل مع عدد كبير من المنتجات والزوار، مع توفير تجربة شراء سهلة وآمنة.',
        solution:
          'استخدمنا منصة Next.js لبناء واجهة أمامية سريعة وتفاعلية، مع ربطها بنظام إدارة محتوى سهل الاستخدام لفريق عمل "أناقة".',
        results: [
          'زيادة المبيعات بنسبة 40% خلال أول 3 أشهر',
          'تقليل معدل الارتداد بنسبة 25%',
        ],
        tools: ['Next.js', 'React', 'Prisma', 'Stripe'],
        clientInfo: {
          name: seededClients[1].name,
          service: 'تطوير متجر إلكتروني',
          year: '2024',
        },
      },
    ];

    for (const project of projects) {
      await prisma.project.create({ data: project });
    }
    console.log(`✅ ${projects.length} Projects seeded.`);

    // 11. Generate and Seed Testimonials
    const seededProjects = await prisma.project.findMany();
    if (seededProjects.length > 0) {
      const testimonials = [
        {
          rating: 5,
          text: 'فريق مبدع ومحترف، لقد نقلوا علامتنا التجارية إلى مستوى جديد تمامًا. سعداء جدًا بالنتيجة!',
          clientId: seededClients[0].id,
          projectId: seededProjects[0].id,
          category: 'branding',
        },
        {
          rating: 5,
          text: 'المتجر الإلكتروني الجديد فاق توقعاتنا. التصميم رائع والأداء سريع جدًا. شكرًا لفريق العمل.',
          clientId: seededClients[1].id,
          projectId: seededProjects[1].id,
          category: 'web-development',
        },
        {
          rating: 4,
          text: 'تجربة عمل ممتازة، تواصل مستمر واهتمام بأدق التفاصيل. أنصح بالتعامل معهم.',
          clientId: seededClients[2].id,
          category: 'ads',
        },
      ];
      await prisma.testimonial.createMany({ data: testimonials });
      console.log(`✅ ${testimonials.length} Testimonials seeded.`);
    }
  } else {
    console.log(
      '⚠️ Skipping projects and testimonials seeding due to insufficient client data.'
    );
  }

  console.log('🎉 Seeding finished successfully!');
}

main()
  .catch(e => {
    console.error('An error occurred during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
