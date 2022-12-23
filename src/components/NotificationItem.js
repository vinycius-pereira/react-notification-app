import styled from 'styled-components'


const NotificationBubble = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  background: ${props => props.unseen ? "hsl(210, 60%, 98%)" : "white"};
  border-radius: 15px;
  padding: 15px;
  margin: 5px 30px;
`

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`

const HasSeenNotification = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: hsl(1, 90%, 64%);
  border-radius: 10px;
  margin-left: 5px;
`

const Name = styled.span`
  cursor: pointer;
  font-weight: 800;

  &:hover {
    color: hsl(219, 85%, 26%);
  }
`

const RegularText = styled.span`
  opacity: 0.50;
  margin: 0 5px;
  color: hsl(219, 12%, 42%);
`

const Message = styled.span`
  cursor: pointer;
  color: hsl(224, 21%, 14%);
  font-weight: 800;
  opacity: 0.75;

  &:hover {
    color: hsl(219, 85%, 26%);
  }
`

const Date = styled.span`
  opacity: 0.50;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const TextBox = styled.div`
  background: none;
  font: inherit;
  cursor: pointer;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  text-align: left;

  &:hover {
    background: hsl(211, 68%, 94%);
  }
`
const users = [
    {
        avatar: 'avatar-mark-webber',
        name: 'Mark Webber',
        action: 'reacted to your recent post',
        body: 'My first tournament today!',
        date: '1m ago',
        message: null,
        image: null,
        seen: false
    },
    {
        avatar: 'avatar-angela-gray',
        name: 'Angela Gray',
        action: 'followed you',
        body: null,
        date: '5m ago',
        message: null,
        image: null,
        seen: false
    },
    {
        avatar: 'avatar-jacob-thompson',
        name: 'Jacob Thompson',
        action: 'has joined your group',
        body: 'Chess Club',
        date: '1 day ago',
        message: null,
        image: null,
        seen: false
    },
    {
        avatar: 'avatar-rizky-hasanuddin',
        name: 'Rizky Hasanuddin',
        action: 'sent you a private message',
        body: null,
        date: '5 days ago',
        message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        image: null,
        seen: true
    },
    {
        avatar: 'avatar-kimberly-smith',
        name: 'Kimberly Smith',
        action: 'commented on your picture',
        body: null,
        date: '1 week ago',
        message: null,
        image: 'image-chess',
        seen: true
    },
    {
        avatar: 'avatar-nathan-peterson',
        name: 'Nathan Peterson',
        action: 'reacted to your recent post',
        body: '5 end-game strategies to increase your win rate',
        date: '2 week ago',
        message: null,
        image: null,
        seen: true
    },
    {
        avatar: 'avatar-anna-kim',
        name: 'Anna Kim',
        action: 'left the group',
        body: 'Chess Club',
        date: '2 week ago',
        message: null,
        image: null,
        seen: true
    }
]

const NotificationItem = (props) => {
    let seenCounter = 0

    for (let x = 0; x <= users.length - 1; x++) {
        if (!users[x].seen) {
            seenCounter++
        }
    }

    props.hasSeenMessages(seenCounter)

    return users.map(user => {
        if (!user.seen && props.isClear) {
            user.seen = props.isClear
        }

        return (
            <NotificationBubble key={Math.random()} unseen={!user.seen}>
                <Container>
                    <div>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img src={`/images/${user.avatar}.webp`} alt="profile avatar" width="40px"/>
                            </div>
                            <div style={{marginLeft: '10px'}}>
                                <Body>
                                <div>
                                    <Name>{user.name}</Name>
                                    <RegularText>{user.action}</RegularText>
                                    {user.body && <Message>{user.body}</Message>}
                                    {!user.seen && <HasSeenNotification/>}
                                </div>
                                </Body>
                                <Date>{user.date}</Date>
                                {user.message && (
                                    <TextBox>
                                        <RegularText>{user.message}</RegularText>
                                    </TextBox>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        {user.image && (
                            <img src={`/images/${user.image}.webp`} alt="preview" width="50px"/>
                        )}
                    </div>
                </Container>
            </NotificationBubble>
        )
    })
}

export default NotificationItem