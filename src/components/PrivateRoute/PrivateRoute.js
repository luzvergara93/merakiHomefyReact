import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../../Context/userContext'


const PrivateRoute = ({children}) => {
    const { user } = useContext(UserContext)
    return user ? {children} : <Navigate to='/' />
}

export default PrivateRoute