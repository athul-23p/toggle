import styled from "styled-components";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";
import UserAvatar from "./UserAvatar";

const SideNavbarWrapper = styled.div`
    /* border: 1px solid blue; */
    height: 100vh;
    /* width: 15vw; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding:20px 10px;
    box-sizing: border-box;
`;

function SideNavbar(){


    return <SideNavbarWrapper>
        <UserAvatar/>
        <NavLinks/>
        <NavButton/>
    </SideNavbarWrapper>
}


export default SideNavbar;