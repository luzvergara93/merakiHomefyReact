import { useState, useContext } from 'react'


const ContactForm = ( ) => {

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

// const AddContact = () => {
//     const contact = {
//         phone,
//         email,
//         comment
//     }

//     console.log(contact)

// }
    return (
            <div className='ContactForm'>
                    <h3>Ingrese sus datos para finalizar la compra</h3>
                    <form className='LoginForm'>
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
                            email
                        <input
                            className='InputLogin'
                            type='email'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
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
                            <button type='submit' className='Button'> Agregar Datos</button>
                        </div>
                    </form>
                    </div>
    )
}

export default ContactForm