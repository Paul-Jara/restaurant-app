import { useEffect, useState } from "react"
import { getData } from "../util/myAPIs"
import { Food } from "../component/Food"
import LabelInput from "../component/LabelInput"
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const [foods, setFoods] = useState([])
    const [table, setTable] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getData('food', setFoods)
        getTable()
    }, [])

    useEffect(() => {
        if(table) {
            localStorage.setItem('table', table)
        }
    }, [table])

    const getTable = () => {
        let auxTable = localStorage.getItem('table')
        setTable(auxTable ? auxTable : undefined)
    }
    
    return (
        <section>
            <article>
                <LabelInput labelText="Número de mesa" setter={setTable} type="text" defaultValue={table}/>
                {
                    foods.map((food, index) => {
                        return <Food data={food} table={table} key={index}></Food>
                    })
                }
                <button onClick={() => navigate('/order')}>Verificar pedido</button>
            </article>
        </section>
    )
}

export { Menu }