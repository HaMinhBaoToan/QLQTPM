const db = require('../utils/db');

module.exports = {
    all(){
        return db('users');
    },

    async single(user_id){
        const users = await db('users').where('User_ID', user_id);

        if(users.length === 0){
            return null
        }

        return users[0];
    },

    async singleByUserName(username){
        const users = await db('users').where('User_Name', username);

        if(users.length === 0){
            return null
        }

        return users[0];
    },

    async add(user) {
        const ids = await db('users').insert(user);
        return ids[0];
    },

    updateRefreshToken(id, refreshToken) {
        return db('users').where('User_ID', id).update('rfToken', refreshToken);
    },

    async isValidRefreshToken(id, refreshToken) {
        const list = await db('users').where('User_ID', id).andWhere('rfToken', refreshToken);
        if(list.length > 0) {
            return true;
        }

        return false;
    }
};