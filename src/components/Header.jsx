import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  h1 {
    font-weight: 400;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>My Dashboard</h1>
      <ThemeToggle />
    </HeaderWrapper>
  );
}

export default Header;
