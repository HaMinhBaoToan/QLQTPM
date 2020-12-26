const db = require('../utils/db');

module.exports = {
    all(){
        return db('orders');
    },

    async single(id){
        const orders = await db('orders').where('Order_Id', id);

        if(orders.length === 0){
            return null
        }

        return orders[0];
    },

    add(order){
        return db('orders').insert(order);
    },

    delete(id){
        return db('orders').where('Order_ID', id).del()
    },

    update(id, order){
        return db('orders').where('Order_ID', id).update(order)
    }
};