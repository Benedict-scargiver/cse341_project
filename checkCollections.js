const mongodb = require('./data/database');

mongodb.initDb(async (err) => {
    if (err) {
        console.log('Failed to connect:', err);
        return;
    }
    const db = mongodb.getDatabase();
    const collections = await db.listCollections().toArray();
    for (const col of collections) {
        const count = await db.collection(col.name).countDocuments();
        console.log(`Collection: ${col.name}, Document count: ${count}`);
    }
    process.exit(0);
});
