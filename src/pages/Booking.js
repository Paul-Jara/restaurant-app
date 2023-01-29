import { useState } from "react"
import LabelInput from "../component/LabelInput"

const Booking = () => {
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [celebration, setCelebration] = useState()

    const saveBookin = () => {
        alert('Reserva guardada exitosamente!' + JSON.stringify(booking))
    }

    let booking = {'name': name, 'lastName': lastName, 'email': email, 'phone': phone, 'celebration': celebration}
    

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
                <button onClick={saveBookin}>Reservar</button>
            </article>
        </section>
    )
}

export { Booking }