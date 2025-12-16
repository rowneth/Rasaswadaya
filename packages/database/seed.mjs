import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function seed() {
  console.log('🌱 Seeding Sri Lankan cultural data...\n');

  // Clear existing data (in reverse order of dependencies)
  console.log('Clearing existing data...');
  await sql.query('DELETE FROM "_EventArtists"');
  await sql.query('DELETE FROM "OrderItem"');
  await sql.query('DELETE FROM "Order"');
  await sql.query('DELETE FROM "EventAction"');
  await sql.query('DELETE FROM "Product"');
  await sql.query('DELETE FROM "Event"');
  await sql.query('DELETE FROM "Artist"');
  await sql.query('DELETE FROM "Category"');
  await sql.query('DELETE FROM "Store"');
  await sql.query('DELETE FROM "User"');

  // ============ USERS ============
  console.log('\n👤 Creating users...');
  const users = [
    { id: 'user-1', email: 'kasun@example.com', password: 'hashed_password_1', fullName: 'කසුන් පෙරේරා', city: 'Colombo', interests: ['Music', 'Dance'] },
    { id: 'user-2', email: 'nimali@example.com', password: 'hashed_password_2', fullName: 'නිමාලි ද සිල්වා', city: 'Kandy', interests: ['Art', 'Crafts'] },
    { id: 'user-3', email: 'sunil@example.com', password: 'hashed_password_3', fullName: 'සුනිල් ජයවර්ධන', city: 'Galle', interests: ['Theatre', 'Music'] },
    { id: 'user-4', email: 'malini@example.com', password: 'hashed_password_4', fullName: 'මාලිනී රත්නායක', city: 'Matara', interests: ['Dance', 'Art'] },
    { id: 'user-5', email: 'ruwan@example.com', password: 'hashed_password_5', fullName: 'රුවන් විජේසිංහ', city: 'Jaffna', interests: ['Crafts', 'Music'] },
  ];

  for (const u of users) {
    await sql.query(
      `INSERT INTO "User" (id, email, password, "fullName", city, interests) VALUES ($1, $2, $3, $4, $5, $6)`,
      [u.id, u.email, u.password, u.fullName, u.city, u.interests]
    );
    console.log(`  ✓ ${u.fullName}`);
  }

  // ============ CATEGORIES ============
  console.log('\n📁 Creating categories...');
  const categories = [
    { id: 'cat-1', name: 'අත්කම් (Handloom)', slug: 'handloom', iconUrl: '🧵' },
    { id: 'cat-2', name: 'වෙස් මුහුණු (Masks)', slug: 'masks', iconUrl: '🎭' },
    { id: 'cat-3', name: 'ලී කර්මාන්ත (Woodwork)', slug: 'woodwork', iconUrl: '🪵' },
    { id: 'cat-4', name: 'බ්‍රාස් වෑඩි (Brassware)', slug: 'brassware', iconUrl: '🔔' },
    { id: 'cat-5', name: 'බතික් (Batik)', slug: 'batik', iconUrl: '👘' },
    { id: 'cat-6', name: 'මැටි භාණ්ඩ (Pottery)', slug: 'pottery', iconUrl: '🏺' },
    { id: 'cat-7', name: 'ලේස් (Lace)', slug: 'lace', iconUrl: '🪡' },
    { id: 'cat-8', name: 'ආභරණ (Jewelry)', slug: 'jewelry', iconUrl: '💎' },
  ];

  for (const c of categories) {
    await sql.query(
      `INSERT INTO "Category" (id, name, slug, "iconUrl") VALUES ($1, $2, $3, $4)`,
      [c.id, c.name, c.slug, c.iconUrl]
    );
    console.log(`  ✓ ${c.name}`);
  }

  // ============ STORES ============
  console.log('\n🏪 Creating stores...');
  const stores = [
    { 
      id: 'store-1', 
      name: 'කඳුළු අත්කම් සාප්පුව', 
      description: 'Traditional Kandyan handloom textiles and garments. Family business since 1952.',
      logoUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200',
      coverUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      ownerId: 'user-2'
    },
    { 
      id: 'store-2', 
      name: 'අම්බලන්ගොඩ වෙස් මුහුණු', 
      description: 'Authentic Ambalangoda traditional masks - Kolam, Sanni, and Raksha masks.',
      logoUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=200',
      coverUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800',
      ownerId: 'user-3'
    },
    { 
      id: 'store-3', 
      name: 'ගාල්ල ලේස් නිර්මාණ', 
      description: 'Exquisite Galle lace products - table cloths, doilies, and decorative items.',
      logoUrl: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=200',
      coverUrl: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=800',
      ownerId: 'user-4'
    },
    { 
      id: 'store-4', 
      name: 'බතික් ලෝකය', 
      description: 'Hand-painted batik fabrics, sarongs, wall hangings, and clothing.',
      logoUrl: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67e89?w=200',
      coverUrl: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67e89?w=800',
      ownerId: 'user-5'
    },
  ];

  for (const s of stores) {
    await sql.query(
      `INSERT INTO "Store" (id, name, description, "logoUrl", "coverUrl", "ownerId") VALUES ($1, $2, $3, $4, $5, $6)`,
      [s.id, s.name, s.description, s.logoUrl, s.coverUrl, s.ownerId]
    );
    console.log(`  ✓ ${s.name}`);
  }

  // ============ PRODUCTS ============
  console.log('\n🛍️ Creating products...');
  const products = [
    // Handloom products
    { name: 'කඳුළු සාරිය', description: 'Traditional Kandyan saree with handwoven gold thread border', price: 15000, imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500', stock: 5, storeId: 'store-1', categoryId: 'cat-1' },
    { name: 'දුම්මල සළුව', description: 'Handwoven Dumbara mat with traditional patterns', price: 8500, imageUrl: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500', stock: 10, storeId: 'store-1', categoryId: 'cat-1' },
    { name: 'අත්වැඩ කොට්ට උර', description: 'Hand-embroidered pillow cover set (2 pieces)', price: 3500, imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500', stock: 20, storeId: 'store-1', categoryId: 'cat-1' },
    
    // Masks
    { name: 'රාක්ෂ වෙස් මුහුණ', description: 'Large Raksha demon mask - wall decoration', price: 12000, imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=500', stock: 3, storeId: 'store-2', categoryId: 'cat-2' },
    { name: 'කෝලම් වෙස් මුහුණ', description: 'Traditional Kolam mask used in folk drama', price: 8000, imageUrl: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=500', stock: 5, storeId: 'store-2', categoryId: 'cat-2' },
    { name: 'සන්නි වෙස් මුහුණ', description: 'Healing ritual Sanni mask - authentic', price: 15000, imageUrl: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=500', stock: 2, storeId: 'store-2', categoryId: 'cat-2' },
    { name: 'ගරා යකා මුහුණ', description: 'Gara Yaka fire demon mask', price: 9500, imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500', stock: 4, storeId: 'store-2', categoryId: 'cat-2' },
    
    // Lace
    { name: 'ලේස් මේස රෙද්ද', description: 'Hand-crafted lace tablecloth - 6 seater', price: 18000, imageUrl: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500', stock: 3, storeId: 'store-3', categoryId: 'cat-7' },
    { name: 'ලේස් ඩොයිලි කට්ටලය', description: 'Set of 6 decorative lace doilies', price: 4500, imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', stock: 15, storeId: 'store-3', categoryId: 'cat-7' },
    { name: 'ලේස් කර්ටන් යුගල', description: 'Pair of handmade lace curtains', price: 22000, imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', stock: 4, storeId: 'store-3', categoryId: 'cat-7' },
    
    // Batik
    { name: 'බතික් සරම', description: 'Hand-painted batik sarong - blue peacock design', price: 5500, imageUrl: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67e89?w=500', stock: 12, storeId: 'store-4', categoryId: 'cat-5' },
    { name: 'බතික් බිත්ති සැරසිලි', description: 'Large batik wall hanging - elephant parade', price: 8500, imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500', stock: 6, storeId: 'store-4', categoryId: 'cat-5' },
    { name: 'බතික් කමිසය', description: 'Men\'s batik shirt - traditional motifs', price: 4500, imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500', stock: 20, storeId: 'store-4', categoryId: 'cat-5' },
    { name: 'බතික් බෑග්', description: 'Handmade batik tote bag', price: 2800, imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500', stock: 25, storeId: 'store-4', categoryId: 'cat-5' },
    { name: 'බතික් ස්කාෆ්', description: 'Silk batik scarf with lotus design', price: 3200, imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500', stock: 18, storeId: 'store-4', categoryId: 'cat-5' },
  ];

  for (const p of products) {
    await sql.query(
      `INSERT INTO "Product" (name, description, price, "imageUrl", stock, "storeId", "categoryId") VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [p.name, p.description, p.price, p.imageUrl, p.stock, p.storeId, p.categoryId]
    );
    console.log(`  ✓ ${p.name} - Rs.${p.price}`);
  }

  // ============ ARTISTS ============
  console.log('\n🎨 Creating artists...');
  const artists = [
    { id: 'artist-1', name: 'ලක්ෂාන් සංජුල', bio: 'Award-winning traditional Kandyan dancer with 20+ years experience. Performed internationally.', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', genre: 'Kandyan Dance' },
    { id: 'artist-2', name: 'සුනේත්‍රා බණ්ඩාර', bio: 'Classical Bharatanatyam and traditional Sri Lankan dancer. Cultural ambassador.', photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300', genre: 'Classical Dance' },
    { id: 'artist-3', name: 'අමල් පෙරේරා', bio: 'Renowned Baila and traditional music artist. Multiple award winner.', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300', genre: 'Traditional Music' },
    { id: 'artist-4', name: 'නිරෝෂා විජේරත්න', bio: 'Contemporary Sri Lankan vocalist blending traditional and modern styles.', photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300', genre: 'Vocal' },
    { id: 'artist-5', name: 'චාමර වීරසිංහ', bio: 'Master drummer specializing in traditional Hewisi and Geta Beraya.', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300', genre: 'Traditional Drums' },
    { id: 'artist-6', name: 'මධුෂානි ප්‍රනාන්දු', bio: 'Rising star in Sri Lankan folk music and Nadagam theatre.', photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300', genre: 'Folk Music' },
  ];

  for (const a of artists) {
    await sql.query(
      `INSERT INTO "Artist" (id, name, bio, "photoUrl", genre) VALUES ($1, $2, $3, $4, $5)`,
      [a.id, a.name, a.bio, a.photoUrl, a.genre]
    );
    console.log(`  ✓ ${a.name} (${a.genre})`);
  }

  // ============ EVENTS ============
  console.log('\n🎉 Creating events...');
  const events = [
    { 
      id: 'event-1',
      title: 'කඳුළු ඇසළ පෙරහැර 2025', 
      description: 'The grand Kandy Esala Perahera - one of the oldest and grandest Buddhist festivals featuring traditional dancers, drummers, and magnificently decorated elephants.',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      eventDate: new Date('2025-08-15T18:00:00'),
      location: 'Temple of the Tooth, Kandy',
      capacity: 50000
    },
    { 
      id: 'event-2',
      title: 'ගාල්ල සාහිත්‍ය උත්සවය', 
      description: 'Annual Galle Literary Festival featuring Sri Lankan and international authors, poetry readings, and cultural discussions.',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      eventDate: new Date('2026-01-25T09:00:00'),
      location: 'Galle Fort, Galle',
      capacity: 2000
    },
    { 
      id: 'event-3',
      title: 'සිංහල අලුත් අවුරුදු සැමරුම', 
      description: 'Traditional Sinhala and Tamil New Year celebration with folk games, music, dance performances, and authentic cuisine.',
      imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
      eventDate: new Date('2026-04-13T06:00:00'),
      location: 'Independence Square, Colombo',
      capacity: 10000
    },
    { 
      id: 'event-4',
      title: 'වෙසක් පෝය උත්සවය', 
      description: 'Vesak Poya celebration with illuminated pandols (thorana), dansalas (free food stalls), and Buddhist rituals.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      eventDate: new Date('2026-05-12T17:00:00'),
      location: 'Gangaramaya Temple, Colombo',
      capacity: 20000
    },
    { 
      id: 'event-5',
      title: 'නාට්‍ය උළෙල - Folk Theatre Night', 
      description: 'An evening of traditional Kolam, Sokari, and Nadagam performances by master artists.',
      imageUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800',
      eventDate: new Date('2025-12-28T19:00:00'),
      location: 'Lionel Wendt Theatre, Colombo',
      capacity: 500
    },
    { 
      id: 'event-6',
      title: 'අත්කම් ප්‍රදර්ශනය 2026', 
      description: 'Exhibition and sale of traditional Sri Lankan handicrafts - handloom, brassware, pottery, and woodwork.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      eventDate: new Date('2026-02-14T10:00:00'),
      location: 'BMICH, Colombo',
      capacity: 5000
    },
  ];

  for (const e of events) {
    await sql.query(
      `INSERT INTO "Event" (id, title, description, "imageUrl", "eventDate", location, capacity) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [e.id, e.title, e.description, e.imageUrl, e.eventDate, e.location, e.capacity]
    );
    console.log(`  ✓ ${e.title}`);
  }

  // ============ EVENT-ARTIST RELATIONSHIPS ============
  console.log('\n🔗 Linking artists to events...');
  const eventArtists = [
    { eventId: 'event-1', artistId: 'artist-1' },
    { eventId: 'event-1', artistId: 'artist-5' },
    { eventId: 'event-3', artistId: 'artist-2' },
    { eventId: 'event-3', artistId: 'artist-3' },
    { eventId: 'event-3', artistId: 'artist-4' },
    { eventId: 'event-4', artistId: 'artist-5' },
    { eventId: 'event-4', artistId: 'artist-6' },
    { eventId: 'event-5', artistId: 'artist-1' },
    { eventId: 'event-5', artistId: 'artist-2' },
    { eventId: 'event-5', artistId: 'artist-6' },
  ];

  for (const ea of eventArtists) {
    await sql.query(
      `INSERT INTO "_EventArtists" ("A", "B") VALUES ($1, $2)`,
      [ea.artistId, ea.eventId]
    );
  }
  console.log(`  ✓ ${eventArtists.length} artist-event links created`);

  // ============ SAMPLE ORDERS ============
  console.log('\n📦 Creating sample orders...');
  const orders = [
    { id: 'order-1', userId: 'user-1', status: 'DELIVERED', total: 23500 },
    { id: 'order-2', userId: 'user-1', status: 'PENDING', total: 8500 },
    { id: 'order-3', userId: 'user-4', status: 'SHIPPED', total: 15000 },
  ];

  for (const o of orders) {
    await sql.query(
      `INSERT INTO "Order" (id, "userId", status, total) VALUES ($1, $2, $3, $4)`,
      [o.id, o.userId, o.status, o.total]
    );
    console.log(`  ✓ Order ${o.id} - Rs.${o.total} (${o.status})`);
  }

  // Order items
  const orderItems = [
    { orderId: 'order-1', productId: null, quantity: 1, price: 15000 }, // Will get product ID
    { orderId: 'order-1', productId: null, quantity: 1, price: 8500 },
    { orderId: 'order-2', productId: null, quantity: 1, price: 8500 },
    { orderId: 'order-3', productId: null, quantity: 1, price: 15000 },
  ];

  // Get product IDs
  const productRows = await sql.query('SELECT id FROM "Product" LIMIT 4');
  for (let i = 0; i < orderItems.length && i < productRows.rows.length; i++) {
    await sql.query(
      `INSERT INTO "OrderItem" ("orderId", "productId", quantity, price) VALUES ($1, $2, $3, $4)`,
      [orderItems[i].orderId, productRows.rows[i].id, orderItems[i].quantity, orderItems[i].price]
    );
  }
  console.log(`  ✓ ${orderItems.length} order items created`);

  // ============ EVENT ACTIONS (likes, going) ============
  console.log('\n❤️ Creating event interactions...');
  const eventActions = [
    { userId: 'user-1', eventId: 'event-1', type: 'GOING' },
    { userId: 'user-1', eventId: 'event-3', type: 'INTERESTED' },
    { userId: 'user-2', eventId: 'event-5', type: 'GOING' },
    { userId: 'user-3', eventId: 'event-1', type: 'GOING' },
    { userId: 'user-4', eventId: 'event-3', type: 'GOING' },
    { userId: 'user-5', eventId: 'event-6', type: 'INTERESTED' },
  ];

  for (const ea of eventActions) {
    await sql.query(
      `INSERT INTO "EventAction" ("userId", "eventId", type) VALUES ($1, $2, $3)`,
      [ea.userId, ea.eventId, ea.type]
    );
  }
  console.log(`  ✓ ${eventActions.length} event interactions created`);

  console.log('\n✅ Seeding complete! Database is ready with Sri Lankan cultural data.');
  
  // Print summary
  console.log('\n📊 Summary:');
  const counts = await Promise.all([
    sql.query('SELECT COUNT(*) FROM "User"'),
    sql.query('SELECT COUNT(*) FROM "Category"'),
    sql.query('SELECT COUNT(*) FROM "Store"'),
    sql.query('SELECT COUNT(*) FROM "Product"'),
    sql.query('SELECT COUNT(*) FROM "Artist"'),
    sql.query('SELECT COUNT(*) FROM "Event"'),
    sql.query('SELECT COUNT(*) FROM "Order"'),
  ]);
  
  console.log(`   Users:      ${counts[0].rows[0].count}`);
  console.log(`   Categories: ${counts[1].rows[0].count}`);
  console.log(`   Stores:     ${counts[2].rows[0].count}`);
  console.log(`   Products:   ${counts[3].rows[0].count}`);
  console.log(`   Artists:    ${counts[4].rows[0].count}`);
  console.log(`   Events:     ${counts[5].rows[0].count}`);
  console.log(`   Orders:     ${counts[6].rows[0].count}`);
}

seed().catch(console.error);
