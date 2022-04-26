import files from "../icons/Files.svg";
import maps from "../icons/Maps.svg";
import messages from "../icons/Messages.svg";
import settings from "../icons/Settings.svg";
import shopping from "../icons/Shopping.svg";
import stats from "../icons/Stats.svg";
import NavLink from "./NavLink";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    margin: 9px;
  }

  & > div {
    padding: 10px;
  }
  & div:nth-child(1) {
    background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
    box-shadow: ${(props) => {
      if (props.theme.selected === "light") {
        return "0px 5px 15px #acb2c1";
      }
      return "none";
    }};
    border-radius: 5px;
    width: 190%;

    /* transform: scale(0.9); */
  }
`;
function NavLinks() {
  const icons = [stats, maps, shopping, messages, files, settings];
  const { activeTheme } = useContext(ThemeContext);

  return (
    <NavLinksWrapper theme={activeTheme}>
      {icons.map((img, i) => (
        <NavLink image={img} />
      ))}
    </NavLinksWrapper>
  );
}

export default NavLinks;
