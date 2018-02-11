const AsyncMysqljs = require('../lib/AsyncMysqljs');

const config = process.env.NODE_ENV === 'dev' ? {
    host: 'localhost',
    user: 'root',
    password: '88888888',
    database: 'beautyimage',
    connectionLimit: 20
} : {
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'yourdatabase',
    connectionLimit: 20
};

module.exports = AsyncMysqljs(config);