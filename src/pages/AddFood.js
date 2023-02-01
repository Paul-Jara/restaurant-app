import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getData } from "../util/myAPIs"
import LabelInput from "../component/LabelInput"

const AddFood = () => {
    const [foods, setFoods] = useState([])
    const [quantity, setQuantity] = useState(1)
    const params = useParams()
    const { id, table } = params
    const navigate = useNavigate()

    useEffect(() => {
        getDefValue()
        getData('food', setFoods)
    }, [])

    const getDefValue = () => {
        let orderDetail = localStorage.getItem('orderDetail')
        orderDetail = orderDetail ? JSON.parse(orderDetail) : undefined
        if(orderDetail) {
            let orderItem = orderDetail.orderItems.find(item => item.id === id)
            if(orderItem) {
                setQuantity(orderItem.quantity)
            } 
        }
    }

    let food
    foods.forEach(e => {
        if(e.id === id) {
            food = e.data()
            return
        }
    })

    const addToCart = () => {
        let orderDetail = localStorage.getItem('orderDetail')
        orderDetail = orderDetail ? JSON.parse(orderDetail) : undefined
        
        let orderItem = {
            foodId: id,
            quantity: quantity
        }

        if(orderDetail) {
            let auxOrderItem = orderDetail.orderItems.find(item => item.foodId === id)
            if(auxOrderItem) {
                orderDetail.orderItems.splice(orderDetail.orderItems.indexOf(auxOrderItem), 1)
            }
            if(parseInt(quantity) > 0) {
                orderDetail.orderItems.push(orderItem)
            }
        } else {
            orderDetail = {
                table: parseInt(table),
                pendigToDeliver: true,
                orderItems: [
                    orderItem
                ]
            }
        }
        localStorage.setItem('orderDetail', JSON.stringify(orderDetail))
        navigate('/menu')
    }

    return (
        <section>
            <article>
                <div>
                    <p>{food?.name}</p>
                    <p>{food?.ingredient}</p>
                    <p>{food?.price}</p>
                </div>
                <LabelInput labelText="Cantidad" defaultValue={quantity} type="text" setter={setQuantity} />
                <button onClick={addToCart}>Confirmar</button>
            </article>
        </section>
    )
}

export { AddFood }