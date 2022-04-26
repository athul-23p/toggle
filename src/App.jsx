import './App.css';
import Header from './components/Header';
import SideNavbar from './components/SideNavbar';
import styled from 'styled-components'
import Statistics from './components/Statistics';
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const Wrapper = styled.div`
  .App {
    display: flex;
    background-color: ${(props) => {
      const { selected, theme } = props.theme;
      return theme[selected].main_bg;
    }};
    color: ${(props) => {
      const { selected, theme } = props.theme;
      return theme[selected].text_color;
    }};
  }
`;
function App() {

  const { activeTheme} = useContext(ThemeContext);
  return (
    <Wrapper theme={activeTheme}>
      <div className="App">
        <SideNavbar />
        <div>
          <Header />
          <Statistics/>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
