import { useNavigate } from "react-router-dom"

export const Food = ({data, table}) => {
    const food = data.data()
    const navigate = useNavigate()

    return (
        <div>
            <p>{food.name}</p>
            <p>{food.ingredient}</p>
            <p>{food.price}</p>
            <button onClick={() => navigate(`/food/${table}/${data.id}`)}>Agregar</button>
        </div>
    )
}