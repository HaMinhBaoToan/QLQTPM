const db = require('../utils/db');
const moment = require('moment');

module.exports = {
    all(){
        return db('orders');
    },
    allUser(){
        return db('orders').leftJoin('users', 'orders.Order_EmployeesID', '=', 'users.User_ID');
    },
    async detail(id){
        const orders = await db('orders_details').leftJoin('products', 'orders_details.ProductID', '=', 'products.Product_ID').where('orders_details.OrderId', id);

        if(orders.length === 0){
            return null
        }
        return orders;
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

    async update(id, order){
        return await db('orders').where('Order_ID', id).update(order)
    },

    getDataOverview(fromDate, toDate) {
        return db('orders')
                .whereBetween('Order_OrderDate', [fromDate, toDate])
                .leftJoin('orders_details', 'orders.Order_ID', '=', 'orders_details.OrderID')
                .leftJoin('products', 'orders_details.ProductID', '=', 'products.Product_ID')
                .select(
                    db.raw('count(??) as ??', ['orders_details.OrderID', 'totalItems']),
                    db.raw('sum(?? * ??) as ??', ['products.Product_CostPrice', 'orders_details.Quantity', 'amount'])
                )
                .groupBy('orders.Order_ID')
    },
    getDataReport_Order(fromDate, toDate) {
        return db('orders')
                .whereBetween('Order_OrderDate', [fromDate, toDate])
                .where("orders.Order_Status","=","Done")
                .leftJoin('orders_details', 'orders.Order_ID', '=', 'orders_details.OrderID')
                .leftJoin('products', 'orders_details.ProductID', '=', 'products.Product_ID')
                .select(
                    db.raw('date(??) as ??', ['orders.Order_OrderDate', 'DATE']),
                    db.raw('sum(??) as ??', ['orders_details.Quantity', 'ItemSum']),
                    db.raw('sum(?? * ??) as ??', ['products.Product_CostPrice', 'orders_details.Quantity', 'Amount'])
                )
                .groupByRaw('date(orders.Order_OrderDate)')
    },
    getDataReport_Top(fromDate, toDate) {
        return db('orders')
                .whereBetween('Order_OrderDate', [fromDate, toDate])
                .where("orders.Order_Status","=","Done")
                .leftJoin('orders_details', 'orders.Order_ID', '=', 'orders_details.OrderID')
                .leftJoin('products', 'orders_details.ProductID', '=', 'products.Product_ID')
                .select(
                    db.raw('products.Product_Name'),
                    db.raw('sum(??) as ??', ['orders_details.Quantity', 'ItemSum']),
                    db.raw('sum(?? * ??) as ??', ['products.Product_CostPrice', 'orders_details.Quantity', 'Amount'])
                )
                .groupBy('orders_details.ProductID')
                .orderBy('ItemSum','desc')
                .limit(10)
    },
    
    getTopItems(fromDate, toDate) {
        return db.with('with_alias', db('orders')
                .whereBetween('Order_OrderDate', [fromDate, toDate])
                .join('orders_details', 'orders.Order_ID', '=', 'orders_details.OrderID')
                .join('products', 'orders_details.ProductID', '=', 'products.Product_ID')
                .select(
                    'products.Product_Name as name',
                    'products.Product_CostPrice as price',
                    db.raw('count(??) as totalOrders',  ['*'])
                )
                .groupBy('products.Product_Name')
                ).select(
                    'name',
                    'price',
                    'totalOrders',
                    db.raw('(?? * ??) as ??', ['price', 'totalOrders', 'amount'])
                ).from('with_alias')
                .orderBy('amount', 'desc')
    },

    getChartData(fromDate, toDate) {

        const fd = moment(fromDate).format('YYYY-MM-DD');
        const td = moment(toDate).format('YYYY-MM-DD');

        return db.with('with_alias', db.raw(
            `
            select date, DATE_ADD(date, INTERVAL 1 MONTH) as date1
            from( select('${fd}' - INTERVAL DAYOFMONTH('${fd}')-1 DAY) +INTERVAL m MONTH as date
                    from ( select @rownum:=@rownum+1 as m from
                        (select 1 union select 2 union select 3 union select 4) t1,
                        (select 1 union select 2 union select 3 union select 4) t2,
                        (select 1 union select 2 union select 3 union select 4) t3,
                        (select 1 union select 2 union select 3 union select 4) t4,
                        (select @rownum:=-1) t0
                    ) d1
            ) d2 
            where date<='${td}'
            order by date
            `))
            .select('*').from('with_alias').leftJoin('orders', function() {
                this.on('orders.Order_OrderDate', '>=', 'with_alias.date').andOn('orders.Order_OrderDate', '<=', 'with_alias.date1')
            })
            .leftJoin('orders_details', 'orders.Order_ID', '=', 'orders_details.OrderID')
            .leftJoin('products', 'orders_details.ProductID', '=', 'products.Product_ID')
            .select(
                db.raw('count(??) as ??', ['orders_details.OrderID', 'totalItems']),
                db.raw('sum(?? * ??) as ??', ['products.Product_CostPrice', 'orders_details.Quantity', 'amount'])
            )
            .groupBy('with_alias.date', 'orders.Order_ID', 'orders_details.ID', 'products.Product_ID', 'orders_details.ProductID')

    }
};