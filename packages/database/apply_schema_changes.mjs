
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.DATABASE_URL);

async function migrate() {
  try {
    console.log('Starting migration via serverless driver...');

    // 1. Create Role Enum
    console.log('Creating Role Enum...');
    try {
        await sql`CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'ORGANIZER', 'ARTIST')`;
    } catch (e) {
        console.log('Role enum might already exist or error:', e.message);
    }

    // 2. Add role to User
    console.log('Adding role to User...');
    try {
        await sql`ALTER TABLE "User" ADD COLUMN "role" "Role" NOT NULL DEFAULT 'USER'`;
    } catch (e) {
        console.log('Column role might already exist:', e.message);
    }

    // 3. Create Artist Table
    console.log('Creating Artist Table...');
    try {
        await sql`
            CREATE TABLE "Artist" (
                "id" TEXT NOT NULL,
                "name" TEXT NOT NULL,
                "bio" TEXT NOT NULL,
                "photoUrl" TEXT,
                "genre" TEXT NOT NULL,
                "userId" TEXT,
                CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
            )
        `;
        await sql`CREATE UNIQUE INDEX "Artist_userId_key" ON "Artist"("userId")`;
        await sql`ALTER TABLE "Artist" ADD CONSTRAINT "Artist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE`;
    } catch (e) {
        console.log('Artist table might already exist:', e.message);
    }

    // 4. Update Event Table
    console.log('Updating Event Table...');
    const eventColumns = [
        'organizerId', 'city', 'venue', 'startTime', 'endTime', 'category', 'ticketLink', 'organizerInfo'
    ];
    
    // Add organizerId
    try {
        await sql`ALTER TABLE "Event" ADD COLUMN "organizerId" TEXT`;
        await sql`ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE`;
    } catch (e) { console.log('organizerId error:', e.message); }

    // Add other columns
    try { await sql`ALTER TABLE "Event" ADD COLUMN "city" TEXT`; } catch (e) {}
    try { await sql`ALTER TABLE "Event" ADD COLUMN "venue" TEXT`; } catch (e) {}
    try { await sql`ALTER TABLE "Event" ADD COLUMN "startTime" TIMESTAMP(3)`; } catch (e) {}
    try { await sql`ALTER TABLE "Event" ADD COLUMN "endTime" TIMESTAMP(3)`; } catch (e) {}
    try { await sql`ALTER TABLE "Event" ADD COLUMN "category" TEXT`; } catch (e) {}
    try { await sql`ALTER TABLE "Event" ADD COLUMN "ticketLink" TEXT`; } catch (e) {}
    try { await sql`ALTER TABLE "Event" ADD COLUMN "organizerInfo" JSONB`; } catch (e) {}

    // 5. Create Implicit Many-to-Many Table
    console.log('Creating _ArtistToEvent Table...');
    try {
        await sql`
            CREATE TABLE "_ArtistToEvent" (
                "A" TEXT NOT NULL,
                "B" TEXT NOT NULL
            )
        `;
        await sql`CREATE UNIQUE INDEX "_ArtistToEvent_AB_unique" ON "_ArtistToEvent"("A", "B")`;
        await sql`CREATE INDEX "_ArtistToEvent_B_index" ON "_ArtistToEvent"("B")`;
        await sql`ALTER TABLE "_ArtistToEvent" ADD CONSTRAINT "_ArtistToEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE`;
        await sql`ALTER TABLE "_ArtistToEvent" ADD CONSTRAINT "_ArtistToEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE`;
    } catch (e) {
        console.log('_ArtistToEvent table might already exist:', e.message);
    }

    console.log('Migration completed successfully!');

  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
