import { useState } from 'react'
import './ContactForm.css'


const ContactForm = ( {setContact} ) => {

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()

        const objContact = {
            phone,
            email,
            comment
        }
        
        setContact(objContact)
        setPhone('')
        setEmail('')
        setEmail2('')
        setComment('')

    }
    return (
            <div className='ContactForm'>
                    <h3>Ingrese sus datos para finalizar la compra</h3>
                    <form className='LoginForm' onSubmit={handleContactForm}>
                        <label className='LabelLogin'>
                            Telefono
                        <input
                            className='InputLogin'
                            type='text'
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                        />
                        </label>
                        <label className='LabelLogin'>
                            Email
                        <input
                            className='InputLogin'
                            type='email'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        </label>
                        <label className='LabelLogin'>
                            Repetir email
                        <input
                            className='InputLogin'
                            type='email'
                            value={email2}
                            onChange={({ target }) => setEmail2(target.value)}
                        />
                        </label>
                        <label className='LabelLogin'>
                            Comentario
                        <input
                            className='InputLogin'
                            type='text'
                            value={comment}
                            onChange={({ target }) => setComment(target.value)}
                        />
                        </label>
                        <div className='LabelLogin'>
                           {(email === email2) ? <button type='submit' className='Button'> Agregar Datos</button> : <p> Los emails deben coincidir </p>}
                        </div>
                    </form>
                    </div>
    )
}

export default ContactForm