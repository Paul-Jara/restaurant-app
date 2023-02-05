import { Link } from "react-router-dom"

const AboutUs = () => {
    return (
        <>
            <section id="jumbotron">
                <article className="article-about">
                    <div className="jumbotron-header">
                        <div className="mesa-elegante shadow"></div>
                        <h1 id="page-name">El Pailón Quiteño</h1>
                        <p id="impact-message">"No es solo comida, es amor en cada bocado."</p>
                    </div>
                    <div className="jumbo-impact">
                        <div className="jumbo-item margin-item">
                            <p><strong>Encuentranos en:</strong> Centro historico junto San Gregorio y la que cruza E3-89</p>
                            <p><strong>Nuestros teléfonos:</strong> <strong>+593 6555 432</strong> ó <strong>+593 2345 678</strong></p>
                        </div>
                        <div className="jumbo-item">
                            <h2>Nuestros servicios</h2>
                            <p>Brindamos un ambiente calido y tranquilo para que disfutes de la compañia y de la gastronomía de ecuatoria de la mano de nuestros Chef que ha sido galardonado en varias ocaciones</p>
                            <p>Hemos sido premidados por varias asociaciones que reconocen nuestro gran nivel de servicio y calidad en la atención</p>
                            <br />
                            <p>Ven y disfruta de nuestro exquisito <Link to="/menu">menú</Link></p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export { AboutUs }