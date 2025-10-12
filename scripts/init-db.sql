-- Initialize Velante Database
-- This script runs when the PostgreSQL container starts

-- Create database if it doesn't exist
SELECT 'CREATE DATABASE velante_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'velante_db')\gexec

-- Connect to the database
\c velante_db;

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create indexes for better performance
-- These will be created by Prisma migrations, but we can add custom ones here

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE velante_db TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres;

-- Set timezone
SET timezone = 'UTC';
