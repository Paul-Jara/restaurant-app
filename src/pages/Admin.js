import { Link } from "react-router-dom"
import { LoadMenu } from "../util/LoadMenu"

export const Admin = () => {
    return (
        <section>
            <article id="article-admin">
                <h1>Administrar datos del sistema</h1>
                <p>Sé que esta parte debería ser privada pero el proyecto no tiene manejo de autorización aun!</p>
                <Link to="/">Volver al inicio</Link>
                <LoadMenu />
            </article>
        </section>
    )
}