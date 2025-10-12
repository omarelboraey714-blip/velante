import { prisma } from './prisma';

// Database utility functions
export class DatabaseService {
  // Contact operations
  static async createContact(data) {
    return await prisma.contact.create({ data });
  }

  static async getContacts() {
    return await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  // Project operations
  static async createProject(data) {
    return await prisma.project.create({ data });
  }

  static async getProjects(filters = {}) {
    const where = {};
    
    if (filters.tag && filters.tag !== 'all') {
      where.tag = filters.tag;
    }
    
    if (filters.category) {
      where.category = filters.category;
    }
    
    if (filters.featured !== undefined) {
      where.featured = filters.featured;
    }

    return await prisma.project.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });
  }

  static async getProjectById(id) {
    return await prisma.project.findUnique({
      where: { id },
      include: {
        testimonials: {
          include: {
            client: true
          }
        }
      }
    });
  }

  // Testimonial operations
  static async createTestimonial(data) {
    return await prisma.testimonial.create({
      data,
      include: {
        client: true
      }
    });
  }

  static async getTestimonials(filters = {}) {
    const where = {};
    
    if (filters.category && filters.category !== 'all') {
      where.category = filters.category;
    }
    
    if (filters.rating) {
      where.rating = { gte: filters.rating };
    }

    return await prisma.testimonial.findMany({
      where,
      include: {
        client: true
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  // Team member operations
  static async getTeamMembers() {
    return await prisma.teamMember.findMany({
      orderBy: { name: 'asc' }
    });
  }

  // Service operations
  static async getServices(filters = {}) {
    const where = {};
    
    if (filters.category && filters.category !== 'all') {
      where.category = filters.category;
    }

    return await prisma.service.findMany({
      where,
      orderBy: { createdAt: 'asc' }
    });
  }

  // Package operations
  static async getPackages(filters = {}) {
    const where = {};
    
    if (filters.category && filters.category !== 'all') {
      where.category = filters.category;
    }
    
    if (filters.popular !== undefined) {
      where.popular = filters.popular;
    }

    return await prisma.package.findMany({
      where,
      orderBy: { createdAt: 'asc' }
    });
  }

  // FAQ operations
  static async getFAQs(filters = {}) {
    const where = {};
    
    if (filters.category && filters.category !== 'all') {
      where.category = filters.category;
    }

    return await prisma.fAQ.findMany({
      where,
      orderBy: { createdAt: 'asc' }
    });
  }

  // Newsletter operations
  static async subscribeToNewsletter(email) {
    return await prisma.newsletterSubscription.create({
      data: { email }
    });
  }

  static async getNewsletterSubscriptions() {
    return await prisma.newsletterSubscription.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  // Stats operations
  static async getStats() {
    return await prisma.stat.findMany({
      orderBy: { id: 'asc' }
    });
  }

  // Values operations
  static async getValues() {
    return await prisma.value.findMany({
      orderBy: { title: 'asc' }
    });
  }

  // User operations
  static async createUser(data) {
    return await prisma.user.create({ data });
  }

  static async getUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email }
    });
  }

  static async getUserById(id) {
    return await prisma.user.findUnique({
      where: { id }
    });
  }

  // Activity log operations
  static async logActivity(data) {
    return await prisma.activityLog.create({ data });
  }

  static async getActivityLogs(filters = {}) {
    const where = {};
    
    if (filters.userId) {
      where.userId = filters.userId;
    }
    
    if (filters.action) {
      where.action = filters.action;
    }
    
    if (filters.table) {
      where.table = filters.table;
    }

    return await prisma.activityLog.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: filters.limit || 100
    });
  }

  // Utility methods
  static async getDatabaseStats() {
    const [
      contactsCount,
      projectsCount,
      testimonialsCount,
      teamMembersCount,
      servicesCount,
      packagesCount,
      faqsCount,
      newsletterSubscriptionsCount
    ] = await Promise.all([
      prisma.contact.count(),
      prisma.project.count(),
      prisma.testimonial.count(),
      prisma.teamMember.count(),
      prisma.service.count(),
      prisma.package.count(),
      prisma.fAQ.count(),
      prisma.newsletterSubscription.count()
    ]);

    return {
      contacts: contactsCount,
      projects: projectsCount,
      testimonials: testimonialsCount,
      teamMembers: teamMembersCount,
      services: servicesCount,
      packages: packagesCount,
      faqs: faqsCount,
      newsletterSubscriptions: newsletterSubscriptionsCount
    };
  }

  static async healthCheck() {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return { status: 'healthy', timestamp: new Date() };
    } catch (error) {
      return { status: 'unhealthy', error: error.message, timestamp: new Date() };
    }
  }
}

// Export prisma instance for direct use
export { prisma };
