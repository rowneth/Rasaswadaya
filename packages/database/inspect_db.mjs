
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.DATABASE_URL);

async function inspect() {
  try {
    console.log('Checking Event table columns...');
    const columns = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'Event';
    `;
    console.log('Event Columns:', columns.map(c => c.column_name).join(', '));

    console.log('\nChecking if Role type exists...');
    const types = await sql`
      SELECT typname FROM pg_type WHERE typname = 'Role';
    `;
    console.log('Role type exists:', types.length > 0);

  } catch (error) {
    console.error('Error inspecting DB:', error);
  }
}

inspect();
