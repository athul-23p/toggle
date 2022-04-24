import files from "../icons/Files.svg";
import maps from "../icons/Maps.svg";
import messages from "../icons/Messages.svg";
import settings from "../icons/Settings.svg";
import shopping from "../icons/Shopping.svg";
import stats from "../icons/Stats.svg";
import NavLink from "./NavLink";
import styled from "styled-components";


const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  img {
    margin: 9px;
  }

  &>div{
    width: 110%;
    padding: 10px;
  }
  & div:nth-child(1) {
    background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
    box-shadow: 0px 5px 15px #acb2c1;
    border-radius: 5px;
    transform: scale(1.1);
    
  }
`;
function NavLinks() {
  const icons = [stats, maps, shopping, messages, files, settings];
 
  return (
    <NavLinksWrapper>
      {icons.map((img,i) => (
        <NavLink image={img} />
      ))}
    </NavLinksWrapper>
  );
}

export default NavLinks;
