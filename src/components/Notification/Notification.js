import { useContext } from "react"
import NotificationContext from '../../Context/NotificationContext'
import './Notification.css'

const Notification = () => {
    const { notification, setNotification } = useContext(NotificationContext)

    if(notification.message === '') {
        return null
    }

    return(
        <div className="Notification" style={{ backgroundColor: notification.severity === 'error' ? '#d4ae80' : 'white'}} onClick={() => setNotification('success', '')}>
            {notification.message}
        </div>
    )
}

export default Notification