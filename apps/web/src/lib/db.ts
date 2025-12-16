import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// --- Helper Functions (Migrated to Prisma) ---

export async function getEvents(limit = 4) {
  const events = await prisma.event.findMany({
    take: limit,
    orderBy: { eventDate: 'asc' },
  });
  return events;
}

export async function getArtists(limit = 3) {
  return await prisma.artist.findMany({
    take: limit,
  });
}

export async function getStores(limit = 2) {
  return await prisma.store.findMany({
    take: limit,
    include: { products: { take: 3 } }
  });
}

export async function getProducts(limit = 6) {
  const products = await prisma.product.findMany({
    take: limit,
    include: { store: true }
  });
  
  return products.map(p => ({
    ...p,
    price: Number(p.price),
    storeName: p.store.name
  }));
}

export async function getTrendingEvents(limit = 3) {
  return await prisma.event.findMany({
    take: limit,
    orderBy: { createdAt: 'desc' },
  });
}

export async function getCategories() {
    return [
        { id: 'cat-1', name: 'Handloom', iconUrl: '🧵' },
        { id: 'cat-2', name: 'Masks', iconUrl: '🎭' },
        { id: 'cat-3', name: 'Woodwork', iconUrl: '🪵' },
        { id: 'cat-4', name: 'Brassware', iconUrl: '🏺' },
        { id: 'cat-5', name: 'Batik', iconUrl: '🎨' },
    ];
}
