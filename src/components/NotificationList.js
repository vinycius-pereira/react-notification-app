import NotificationItem from "./NotificationItem";


const NotificationList = (props) => {

    return(
        <div>
            <NotificationItem hasSeenMessages={props.hasSeenMessages} isClear={props.isClear} />
        </div>
    )
}

export default NotificationList