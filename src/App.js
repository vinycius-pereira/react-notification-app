import Notification from "./components/Notification";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F9FAFE;
  height: 100%;
`

const App = () => {
  return (
    <Container>
      <Notification />
    </Container>
  );
}

export default App;
