const mysql = require('../database/mysql');

async function getUserById(id) {
    return await mysql.get('select * from user where id=?', [id]);
}

module.exports = {
    getUserById,
}