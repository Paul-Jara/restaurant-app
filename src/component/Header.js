import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/booking'>Reservación</Link></li>
                    <li><Link to='/order'>Mi orden</Link></li>
                    <li><Link to='/menu'>Menú</Link></li>
                    <li>Ayuda</li>
                </ul>
            </nav>
        </header>
    )
}