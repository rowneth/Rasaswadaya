import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// Create tables based on Prisma schema
const queries = [
  // User table
  `CREATE TABLE IF NOT EXISTS "User" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    city TEXT,
    interests TEXT[] DEFAULT '{}'
  )`,

  // Store table
  `CREATE TABLE IF NOT EXISTS "Store" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    name TEXT NOT NULL,
    description TEXT,
    "logoUrl" TEXT,
    "coverUrl" TEXT,
    "ownerId" TEXT UNIQUE NOT NULL REFERENCES "User"(id) ON DELETE CASCADE
  )`,

  // Category table
  `CREATE TABLE IF NOT EXISTS "Category" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    "iconUrl" TEXT
  )`,

  // Product table
  `CREATE TABLE IF NOT EXISTS "Product" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    name TEXT NOT NULL,
    description TEXT,
    price DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT,
    stock INTEGER NOT NULL DEFAULT 0,
    "storeId" TEXT NOT NULL REFERENCES "Store"(id) ON DELETE CASCADE,
    "categoryId" TEXT REFERENCES "Category"(id) ON DELETE SET NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,

  // Event table
  `CREATE TABLE IF NOT EXISTS "Event" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    title TEXT NOT NULL,
    description TEXT,
    "imageUrl" TEXT,
    "eventDate" TIMESTAMP(3) NOT NULL,
    location TEXT NOT NULL,
    capacity INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,

  // EventAction table
  `CREATE TABLE IF NOT EXISTS "EventAction" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    "eventId" TEXT NOT NULL REFERENCES "Event"(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE("userId", "eventId", type)
  )`,

  // Order table
  `CREATE TABLE IF NOT EXISTS "Order" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'PENDING',
    total DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,

  // OrderItem table
  `CREATE TABLE IF NOT EXISTS "OrderItem" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "orderId" TEXT NOT NULL REFERENCES "Order"(id) ON DELETE CASCADE,
    "productId" TEXT NOT NULL REFERENCES "Product"(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    price DOUBLE PRECISION NOT NULL
  )`,

  // Artist table
  `CREATE TABLE IF NOT EXISTS "Artist" (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    name TEXT NOT NULL,
    bio TEXT,
    "photoUrl" TEXT,
    genre TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,

  // EventArtist junction table
  `CREATE TABLE IF NOT EXISTS "_EventArtists" (
    "A" TEXT NOT NULL REFERENCES "Artist"(id) ON DELETE CASCADE,
    "B" TEXT NOT NULL REFERENCES "Event"(id) ON DELETE CASCADE,
    PRIMARY KEY ("A", "B")
  )`,

  // Create indexes
  `CREATE INDEX IF NOT EXISTS "Product_storeId_idx" ON "Product"("storeId")`,
  `CREATE INDEX IF NOT EXISTS "Product_categoryId_idx" ON "Product"("categoryId")`,
  `CREATE INDEX IF NOT EXISTS "Order_userId_idx" ON "Order"("userId")`,
  `CREATE INDEX IF NOT EXISTS "EventAction_userId_idx" ON "EventAction"("userId")`,
  `CREATE INDEX IF NOT EXISTS "EventAction_eventId_idx" ON "EventAction"("eventId")`,
];

async function pushSchema() {
  console.log('Pushing schema to Neon database...\n');
  
  for (const query of queries) {
    try {
      await sql.query(query);
      const tableName = query.match(/CREATE (?:TABLE|INDEX) IF NOT EXISTS "?([^"\s(]+)/)?.[1] || 'query';
      console.log(`✓ ${tableName}`);
    } catch (error) {
      console.error(`✗ Error: ${error.message}`);
      console.error(`  Query: ${query.substring(0, 60)}...`);
    }
  }
  
  console.log('\n✅ Schema push complete!');
}

pushSchema();
