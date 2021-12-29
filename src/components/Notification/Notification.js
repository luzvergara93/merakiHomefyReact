import { useContext } from "react"
import NotificationContext from '../../Context/NotificationContext'

const Notification = () => {
    const { notification, setNotification } = useContext(NotificationContext)

    if(notification.message === '') {
        return null
    }

    return(
        <div style={{ color: notification.severity === 'error' ? 'red' : 'green'}} onClick={() => setNotification('success', '')}>
            {notification.message}
        </div>
    )
}

export default Notification