import { useEffect, useState } from "react"
import { getData } from "../util/myAPIs"
import { Food } from "../component/Food"
import LabelInput from "../component/LabelInput"
import { useNavigate } from "react-router-dom"
import { fillMenu } from "../util/LoadMenu"

const Menu = () => {
    const [foods, setFoods] = useState([])
    const [table, setTable] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        process.env.REACT_APP_USE_DUMMY === 'false' ? getData('food', setFoods) : setFoods(fillMenu())
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
            <article id="article-menu">
                <h1>Elige de nuestra selecta variedad de platos.</h1>
                <div className="label-input-container">
                    <LabelInput labelText="Número de mesa" setter={setTable} type="text" defaultValue={table}/>
                    <button onClick={() => navigate('/order')}>Verificar pedido</button>
                </div>
                <div id="menu-container">
                    {
                        foods.map((food, index) => {
                            return <Food data={food} table={table} key={index}></Food>
                        })
                    }
                </div>
            </article>
        </section>
    )
}

export { Menu }