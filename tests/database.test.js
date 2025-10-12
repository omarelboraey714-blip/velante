const { PrismaClient } = require('@prisma/client');
const { DatabaseService } = require('../src/lib/database');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/velante_test'
    }
  }
});

describe('Database Tests', () => {
  beforeAll(async () => {
    // Setup test database
    await prisma.$connect();
  });

  afterAll(async () => {
    // Cleanup
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Clean database before each test
    await prisma.contact.deleteMany();
    await prisma.testimonial.deleteMany();
    await prisma.project.deleteMany();
  });

  describe('Contact Operations', () => {
    test('should create a new contact', async () => {
      const contactData = {
        fullName: 'أحمد محمد',
        email: 'ahmed@test.com',
        phone: '01234567890',
        service: 'تصميم هوية بصرية',
        budget: '1000-2000',
        message: 'أريد تصميم هوية بصرية لشركتي'
      };

      const contact = await DatabaseService.createContact(contactData);
      
      expect(contact).toBeDefined();
      expect(contact.fullName).toBe(contactData.fullName);
      expect(contact.email).toBe(contactData.email);
      expect(contact.id).toBeDefined();
    });

    test('should get all contacts', async () => {
      // Create test contacts
      await DatabaseService.createContact({
        fullName: 'أحمد محمد',
        email: 'ahmed@test.com',
        phone: '01234567890',
        service: 'تصميم هوية بصرية',
        budget: '1000-2000'
      });

      await DatabaseService.createContact({
        fullName: 'سارة حسن',
        email: 'sara@test.com',
        phone: '01234567891',
        service: 'تطوير مواقع',
        budget: '2000-5000'
      });

      const contacts = await DatabaseService.getContacts();
      
      expect(contacts).toHaveLength(2);
      expect(contacts[0].fullName).toBe('سارة حسن'); // Should be ordered by createdAt desc
    });
  });

  describe('Project Operations', () => {
    test('should create a new project', async () => {
      const projectData = {
        title: 'مشروع تجريبي',
        category: 'branding',
        type: 'هوية بصرية',
        description: 'وصف المشروع',
        tag: 'branding'
      };

      const project = await DatabaseService.createProject(projectData);
      
      expect(project).toBeDefined();
      expect(project.title).toBe(projectData.title);
      expect(project.category).toBe(projectData.category);
      expect(project.id).toBeDefined();
    });

    test('should get projects with filters', async () => {
      // Create test projects
      await DatabaseService.createProject({
        title: 'مشروع براندنج',
        category: 'branding',
        tag: 'branding'
      });

      await DatabaseService.createProject({
        title: 'مشروع ويب',
        category: 'web',
        tag: 'web'
      });

      const brandingProjects = await DatabaseService.getProjects({ tag: 'branding' });
      const webProjects = await DatabaseService.getProjects({ tag: 'web' });
      
      expect(brandingProjects).toHaveLength(1);
      expect(webProjects).toHaveLength(1);
      expect(brandingProjects[0].title).toBe('مشروع براندنج');
    });
  });

  describe('Testimonial Operations', () => {
    test('should create a new testimonial', async () => {
      // First create a client
      const client = await prisma.client.create({
        data: {
          name: 'عميل تجريبي',
          country: 'السعودية',
          flag: '🇸🇦'
        }
      });

      const testimonialData = {
        rating: 5,
        text: 'خدمة ممتازة!',
        project: 'مشروع تجريبي',
        category: 'branding',
        clientId: client.id
      };

      const testimonial = await DatabaseService.createTestimonial(testimonialData);
      
      expect(testimonial).toBeDefined();
      expect(testimonial.rating).toBe(5);
      expect(testimonial.text).toBe('خدمة ممتازة!');
      expect(testimonial.client).toBeDefined();
      expect(testimonial.client.name).toBe('عميل تجريبي');
    });

    test('should get testimonials with filters', async () => {
      // Create test client
      const client = await prisma.client.create({
        data: {
          name: 'عميل تجريبي',
          country: 'السعودية'
        }
      });

      // Create test testimonials
      await DatabaseService.createTestimonial({
        rating: 5,
        text: 'خدمة ممتازة!',
        category: 'branding',
        clientId: client.id
      });

      await DatabaseService.createTestimonial({
        rating: 4,
        text: 'خدمة جيدة',
        category: 'web-development',
        clientId: client.id
      });

      const brandingTestimonials = await DatabaseService.getTestimonials({ category: 'branding' });
      const highRatingTestimonials = await DatabaseService.getTestimonials({ rating: 5 });
      
      expect(brandingTestimonials).toHaveLength(1);
      expect(highRatingTestimonials).toHaveLength(1);
    });
  });

  describe('Database Health Check', () => {
    test('should return healthy status', async () => {
      const health = await DatabaseService.healthCheck();
      
      expect(health.status).toBe('healthy');
      expect(health.timestamp).toBeDefined();
    });
  });

  describe('Database Stats', () => {
    test('should return database statistics', async () => {
      // Create some test data
      await DatabaseService.createContact({
        fullName: 'أحمد محمد',
        email: 'ahmed@test.com',
        phone: '01234567890',
        service: 'تصميم هوية بصرية',
        budget: '1000-2000'
      });

      await DatabaseService.createProject({
        title: 'مشروع تجريبي',
        category: 'branding'
      });

      const stats = await DatabaseService.getDatabaseStats();
      
      expect(stats.contacts).toBeGreaterThanOrEqual(1);
      expect(stats.projects).toBeGreaterThanOrEqual(1);
      expect(stats.testimonials).toBeGreaterThanOrEqual(0);
    });
  });
});
