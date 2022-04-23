import styled from "styled-components";

const ButtonWrapper = styled.div`
  #nav-add-btn {
    font-size: large;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    text-align: center;
    background-color: #29cc97;
    color: white;
    padding-top: 4px;
    border: none;
  }
`;
function NavButton() {

    return <ButtonWrapper>
        <button id='nav-add-btn'>+</button>
    </ButtonWrapper>
}

export default NavButton;
