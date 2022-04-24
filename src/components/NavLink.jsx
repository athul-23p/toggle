import styled from "styled-components";

const LinkWrapper = styled.div`
  margin: 5px;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;

  
`;

function NavLink({image}){

    return (
      <LinkWrapper>
        <img src={image} alt="" />
      </LinkWrapper>
    );
}


export default NavLink;
