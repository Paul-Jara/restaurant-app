const orders = [
    { 
        table: 3, pendigToDeliver: true, orderItems: [
            { 
                foodId: '1', 
                quantity: 1 
            },
            { 
                foodId: '3', 
                quantity: 2 
            },
            { 
                foodId: '6', 
                quantity: 1 
            },
            { 
                foodId: '7', 
                quantity: 1 
            },
            { 
                foodId: '4', 
                quantity: 2 
            }
        ] 
    },
    { 
        table: 1, pendigToDeliver: true, orderItems: [
            { 
                foodId: '2', 
                quantity: 1 
            },
            { 
                foodId: '5', 
                quantity: 2 
            },
            { 
                foodId: '6', 
                quantity: 1 
            },
            { 
                foodId: '8', 
                quantity: 1 
            },
            { 
                foodId: '4', 
                quantity: 2 
            }
        ] 
    },
    { 
        table: 3, pendigToDeliver: true, orderItems: [
            { 
                foodId: '4', 
                quantity: 1 
            },
            { 
                foodId: '3', 
                quantity: 2 
            },
            { 
                foodId: '5', 
                quantity: 1 
            },
            { 
                foodId: '1', 
                quantity: 1 
            },
            { 
                foodId: '7', 
                quantity: 2 
            }
        ] 
    },
    { 
        table: 3, pendigToDeliver: true, orderItems: [
            { 
                foodId: '4', 
                quantity: 2 
            },
            { 
                foodId: '3', 
                quantity: 7 
            },
            { 
                foodId: '6', 
                quantity: 1 
            },
            { 
                foodId: '1', 
                quantity: 1 
            }
        ] 
    }
]

class Order {
    constructor(id, info) {
        this._id = id
        this._info = info
    }

    get id() {
        return this._id
    }

    get info() {
        return this._info
    }
}

Order.prototype.data = function() {
    return this._info
}

const fillOrders = function() {
    let index = 1
    let result = orders.map(order => {
        return new Order(`${index++}`, order)
    })
    return result;
}

export { fillOrders }