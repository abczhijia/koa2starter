const model = require('../model/index');

async function getUserById(id) {
    return await model.user.getUserById(id);
}

module.exports = {
    getUserById,
}