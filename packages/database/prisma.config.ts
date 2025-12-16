import path from 'node:path';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  earlyAccess: true,
  schema: path.join('prisma', 'schema.prisma'),

  migrate: {
    async adapter() {
      const { PrismaNeon } = await import('@prisma/adapter-neon');
      const { Pool, neonConfig } = await import('@neondatabase/serverless');
      const { default: ws } = await import('ws');

      neonConfig.webSocketConstructor = ws;

      const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
      const pool = new Pool({ connectionString });
      return new PrismaNeon(pool);
    },
  },
});
