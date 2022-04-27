import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";
import UserAvatar from "./UserAvatar";

const SideNavbarWrapper = styled.div`
  height: 100vh;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: ${(props) => {
    const { selected, theme } = props.theme;
    return theme[selected].nav_bg;
  }};
`;

function SideNavbar() {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <SideNavbarWrapper theme={activeTheme}>
      <UserAvatar />
      <NavLinks />
      <NavButton />
    </SideNavbarWrapper>
  );
}

export default SideNavbar;
