import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteData, getData, postData } from "./myAPIs"

const starters = [
    {
        type: 'starters',
        name: 'Llapingacho',
        path: 'llapingacho.jpg',
        price: 6.99,
        ingredients: 'Tortilla de papa, queso, huevo frito, chorizo, ensalada de lechuga, aguacate'
    },
    {
        type: 'starters',
        name: 'Arroz marinero',
        path: 'arroz_marinero.jpg',
        price: 8.99,
        ingredients: 'Arroz, camarones, calamares, conchas, mejillones, ajo, cebolla, pimiento, cilantro y especias'
    },
    {
        type: 'starters',
        name: 'Carne colorada',
        path: 'carne_colorada.jpg',
        price: 7.99,
        ingredients: 'Carne de res marinada en cerveza con ajo, cebolla, achiote, comino, orégano'
    },
    {
        type: 'starters',
        name: 'Chaulafán',
        path: 'chaulafan.jpg',
        price: 5.99,
        ingredients: 'Pollo, tocino, cebolla, ajo, pimientos, arvejas, zanahorias, huevos revueltos, pasas, especias y hierbas'
    },
    {
        type: 'starters',
        name: 'Churrasco',
        path: 'churrasco.jpg',
        price: 6.99,
        ingredients: 'Carne asada o frita, acompañado con huevo frito, papas fritas, plátanos maduros, ensalada, aguacate y ají'
    },
    {
        type: 'starters',
        name: 'Fritada de chancho',
        path: 'fritada_chancho.jpg',
        price: 6.99,
        ingredients: 'Carne de chancho en agua y jugo de naranja con comino, ajo, cebolla, platano maduro, sal y pimienta'
    },
    {
        type: 'starters',
        name: 'Hornado de chancho',
        path: 'hornado_chancho.jpg',
        price: 5.99,
        ingredients: 'Pierna de chancho marinada con aliño de ajo y comino, bañada con cerveza'
    }
]

const drinks = [
    {
        type: 'drinks',
        name: 'Jugo de mora',
        path: 'jugo_mora.jpg',
        price: 2.99,
        ingredients: 'Pulpa de mora y agua'
    },
    {
        type: 'drinks',
        name: 'Jugo de naranja',
        path: 'jugo_naranja.jpg',
        price: 2.99,
        ingredients: 'Zumo de naranja'
    },
    {
        type: 'drinks',
        name: 'Jugo de frutilla',
        path: 'jugo_frutilla.jpg',
        price: 2.99,
        ingredients: 'Pulpa de frutilla y agua'
    },
    {
        type: 'drinks',
        name: 'Coca-Cola 600ml',
        price: 1.99,
    },
    {
        type: 'drinks',
        name: 'Güitig 500ml',
        price: 1.99,
    }
]

const allFood = starters.concat(drinks)

const fillMenu = function() {
    let index = 1
    let menuFood = allFood.map(food => {
        return new InfoMenu(`${index++}`, food)
    })
    return menuFood;
}


class InfoMenu {
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

InfoMenu.prototype.data = function() {
    return this._info
}

const LoadMenu = () => {
    const [foods, setFoods] = useState()
    const navigate = useNavigate()

    const loadMenu = async () => {
        await getData('food', setFoods)
        foods.forEach(food => {
            console.log(food.id)
        })

        starters.forEach(food => {
            postData('food', food)
        })
        drinks.forEach(drink => {
            postData('food', drink)
        })
        alert('Los datos fueron cargados exitosamente.')
    }

    const deleteMenu = async () => {
        await getData('food', setFoods)
        foods.forEach(food => {
            console.log(food.id)
            deleteData('food', food.id)
        })
        alert('Los datos fueron eliminados exitosamente.')
    }
    
    return (
        <div>
            <button onClick={loadMenu}>Cargar datos de incio a Firebase</button>
            <button onClick={deleteMenu}>Eliminar datos del menú incial</button>
            <button onClick={() => navigate('/admin-bookings')}>Ver Reservaciones</button>
        </div>
    ) 
}

export { fillMenu, LoadMenu }