let dateNow = JSON.stringify(new Date())
const bookings = [
    {
        name: 'Amelie',
        lastName: 'Jara',
        companion: 2,
        email: 'paul-jara@hotmail.com',
        phone: '0875545685',
        celebration: 'Boda',
        bookingDate: dateNow
    },
    {
        name: 'Paulette',
        lastName: 'Jara',
        email: 'amelie-jara@hotmail.com',
        companion: 1,
        phone: '0875544385',
        celebration: 'Cumpleaños',
        bookingDate: dateNow
    },
    {
        name: 'Ruth',
        lastName: 'Campoverde',
        email: 'ruth-campoverde@hotmail.com',
        companion: 3,
        phone: '0875545685',
        celebration: 'Cena',
        bookingDate: dateNow
    },
    {
        name: 'Beto',
        lastName: 'Jara',
        email: 'beto-jara@hotmail.com',
        companion: 0,
        phone: '0875545685',
        celebration: 'Cena',
        bookingDate: dateNow
    },
    {
        name: 'Carmen',
        lastName: 'Gutierrez',
        email: 'carmen-gutierrez@hotmail.com',
        companion: 5,
        phone: '0875545685',
        celebration: 'Cena',
        bookingDate: dateNow
    },
    {
        name: 'Byron',
        lastName: 'Jara',
        email: 'byron-jara@hotmail.com',
        companion: 1,
        phone: '0875545685',
        celebration: 'Almuerzo',
        bookingDate: dateNow
    },
    {
        name: 'Veronica',
        lastName: 'Jara',
        email: 'vero-jara@hotmail.com',
        companion: 3,
        phone: '0875545685',
        celebration: 'Desayuno',
        bookingDate: dateNow
    }
]

class Booking {
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

Booking.prototype.data = function() {
    return this._info
}

const fillBookings = function() {
    let index = 1
    let result = bookings.map(booking => {
        return new Booking(`${index++}`, booking)
    })
    return result;
}

export { fillBookings }