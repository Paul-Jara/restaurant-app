import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <img id="nav-icon" className="icon" src={require('../images/tree-icon.jpg')}/>
            <nav>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/booking'>Reservación</Link></li>
                    <li><Link to='/order'>Mi orden</Link></li>
                    <li><Link to='/menu'>Menú</Link></li>
                    <li>Ayuda</li>
                    <li><Link to='/admin'>Administración</Link></li>
                </ul>
            </nav>
        </header>
    )
}