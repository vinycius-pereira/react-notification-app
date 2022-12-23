import styled from 'styled-components'
import NotificationList from "./NotificationList";
import {useState} from "react";

const Header = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
`

const NotificationsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  margin: 0 10px 0 0;
`

const NotificationCounter = styled.div`
  display: flex;
  background: hsl(219, 85%, 26%);
  border-radius: 5px;
  width: 30px;
  height: 26px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
`

const MarkRead = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  opacity: 0.75;
  &:hover{
    color: hsl(219, 85%, 26%);
  }
`

const Container = styled.div`
  border-radius: 10px;
  background: #FFFF;
  width: 900px;

  @media screen and (min-width: 375px) and (max-width: 550px) {
    width: 100%;
    height: 100%;
  }
`

const Notification = (props) => {
    const [hasSeen, setHasSeen] = useState(false)
    const [messagesCounter, setMessagesCounter] = useState(0)


    const handleSeenMessagesCount = seen => {
        setMessagesCounter(seen)
    }

    return (
        <Container>
            <Header>
                <NotificationsHeader>
                    <Title>Notifications</Title>
                    {messagesCounter !== 0 && (
                        <NotificationCounter>{messagesCounter}</NotificationCounter>
                    )}
                </NotificationsHeader>
                <MarkRead onClick={() => setHasSeen(true)}>Mark all as read</MarkRead>
            </Header>
            <NotificationList hasSeenMessages={handleSeenMessagesCount} notificationsClear={hasSeen}/>
        </Container>
    )
}

export default Notification