import styled from "styled-components";
import Home from "./components/Home";

function App() {
  return (
    <AppStyled>
      <Home />
    </AppStyled>
  );
}

export default App;
const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;
