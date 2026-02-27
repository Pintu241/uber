const http=require('http');
const app=require('./app');
const port = process.env.PORT || 4000;

// ensure database connection before starting server
const ConnectToDb = require('./db/db');

async function start() {
    await ConnectToDb();
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log(`server is running on port ${port}`);
    });
}

start().catch(err => {
    console.error('Failed to start server', err);
});