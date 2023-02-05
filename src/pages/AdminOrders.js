import { useEffect, useState } from "react"
import { fillOrders } from "../util/DummyOrders"
import { fillMenu } from "../util/LoadMenu"
import { getData } from "../util/myAPIs"

const AdminOrders = () => {
    const [orders, setOrders] = useState([])
    const [foods, setFoods] = useState([])
    useEffect(() => {
        process.env.REACT_APP_USE_DUMMY === 'false' ? getData('order', setOrders) : setOrders(fillOrders())
        process.env.REACT_APP_USE_DUMMY === 'false' ? getData('food', setFoods) : setFoods(fillMenu())
    }, [])

    useEffect(() => {
        orders.map(order => console.log(order.data()))
    }, [orders])

    return (
        <section>
            <article className="article-about">
                <h1>Ordenes de las mesas</h1>
                <table id='table-orders'>
                    <thead>
                        <tr>
                            <th>Mesa</th>
                            <th>Estado</th>
                            <th>Orden</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders?.length > 0 && orders.map(order => {
                            const data = order.data()
                            return (
                                <tr key={order.id}>
                                    <td>{data.table}</td>
                                    <td>{data.pendigToDeliver ? 'Pendiente' : 'Servido'}</td>
                                    <td>
                                        {
                                            data.orderItems.map((item) => {
                                                let dataFood
                                                foods.map(food => {
                                                    if(food.id === item.foodId) {
                                                        dataFood = food.data()
                                                    }
                                                })
                                                return (
                                                    <p>{item?.quantity} {dataFood?.name} | {dataFood?.price} | {parseFloat(dataFood?.price) * item?.quantity}</p>
                                                )
                                            })
                                        }
                                        <hr/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export { AdminOrders }