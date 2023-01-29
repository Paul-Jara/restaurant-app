import { Food } from "./Food"

const Menu = () => {
    // Query data from Firestor 
    const foods = []
    return (
        <section>
            <article>
                {
                    foods.map(food => {
                        <Food data={food}></Food>
                    })
                }
            </article>
        </section>
    )
}

export { Menu }