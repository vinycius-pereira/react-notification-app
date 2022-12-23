import NotificationItem from "./NotificationItem";


const NotificationList = (props) => {

    return(
        <div>
            <NotificationItem hasSeenMessages={props.hasSeenMessages} notificationsClear={props.notificationsClear} />
        </div>
    )
}

export default NotificationList