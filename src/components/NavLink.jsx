import styled from "styled-components";

const LinkWrapper = styled.div`
  margin: 5px;
  width: 60%;
  justify-content: center;
  display: flex;
  align-items: center;
  transform: scale(0.8);
`;

function NavLink({ image }) {
  return (
    <LinkWrapper>
      <img src={image} alt="" />
    </LinkWrapper>
  );
}

export default NavLink;
