import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getData, postData } from "../util/myAPIs"

const Order = () => {
    const [foods, setFoods] = useState([])
    const [orderDetail, setOrderDetail] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getData('food', setFoods)
        let auxOrderDetail = localStorage.getItem('orderDetail')
        if(auxOrderDetail) {
            setOrderDetail(JSON.parse(auxOrderDetail))
        }
    }, [])

    const saveOrder = () => {
        postData('order', orderDetail)
        localStorage.removeItem('orderDetail')
        navigate('/success-order')
    }

    return (
        <section>
            <article>
                <h1>Detalle de la orden</h1>
                {
                    foods && orderDetail?.orderItems.map((item, index) => {
                        let food
                        foods.forEach(foodItem => {
                            if(foodItem.id === item.foodId) {
                                food = foodItem.data()
                                return
                            }
                        })
                        return (
                            <p key={index}>{food?.name} {item?.quantity}</p>
                        )
                    })
                }
                <button onClick={saveOrder}>Confirmar pedido</button>
            </article>
        </section>
    )
}

export { Order }