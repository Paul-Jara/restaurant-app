import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LabelInput from "../component/LabelInput"
import { postData } from "../util/myAPIs"

const Booking = ({data}) => {
    const navigate = useNavigate()

    const [name, setName] = useState(data?.name)
    const [lastName, setLastName] = useState(data?.lastName)
    const [email, setEmail] = useState(data?.email)
    const [phone, setPhone] = useState(data?.phone)
    const [celebration, setCelebration] = useState(data?.celebration)

    const saveBooking = () => {
        let booking = {'name': name, 'lastName': lastName, 'email': email, 'phone': phone, 'celebration': celebration}
        postData('booking', booking)
        navigate('/booking-order')
    }

    return (
        <section>
            <article>
                <div className="flex column inputBooking">
                    <LabelInput labelText="Nombre" type="text" setter={setName}></LabelInput>
                    <LabelInput labelText="Apellido" type="text" setter={setLastName}></LabelInput>
                    <LabelInput labelText="E-mail" type="text" setter={setEmail}></LabelInput>
                    <LabelInput labelText="Télefono" type="text" setter={setPhone}></LabelInput>
                    <LabelInput labelText="Celebración" type="text" setter={setCelebration}></LabelInput>
                </div>
                <button onClick={saveBooking}>{data ? 'Actualizar reserva' : 'Reservar'}</button>
            </article>
        </section>
    )
}

export { Booking }