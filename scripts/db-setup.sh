#!/bin/bash

# Database Setup Script for Velante Project
# This script helps set up the database for development and production

set -e

echo "🚀 Setting up Velante Database..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL environment variable is not set"
    echo "Please set DATABASE_URL in your .env file"
    exit 1
fi

# Generate Prisma Client
echo "📦 Generating Prisma Client..."
npx prisma generate

# Push database schema
echo "🗄️ Pushing database schema..."
npx prisma db push

# Seed database with initial data
echo "🌱 Seeding database with initial data..."
npx prisma db seed

echo "✅ Database setup completed successfully!"
echo ""
echo "📊 You can now:"
echo "  - Start the development server: npm run dev"
echo "  - Open Prisma Studio: npm run db:studio"
echo "  - View database schema: npx prisma studio"
echo ""
echo "🔗 Database URL: $DATABASE_URL"
