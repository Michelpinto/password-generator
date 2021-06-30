import styled from "styled-components";
import back4 from "./assets/back4.jpg";
// import back2 from "./assets/back2.jpg";
import Card from "./components/Card";

// const img = [{ back2 }, { back4 }];

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
        url(${back4});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <Container>
            <Card />
        </Container>
    );
}

export default App;
