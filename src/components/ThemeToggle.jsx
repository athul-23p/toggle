
import styled from "styled-components";

const ToggleWrapper = styled.div`
  display: flex;

  #theme-selector {
    position: relative;
    width: 50px;
    height: 40px;
    appearance: none;
    background-color: #dfd3d3;
    outline: none;
    transition: 0.7s;
 
  }
  #theme-selector:before {
    content: "";
    position: absolute;
    height: 43px;
    width: 43px;
    top: -1px;
    right: 25px;
    border-radius: 50%;
    background-color: #2992cc;
    transition: 1s;
    z-index: 2;
  }

  #theme-selector:checked::before {
    left: 25px;
    background-color: #29cc97;
  }

  #selector-wrapper {
    display: flex;

    #left {
      top: 3px;
      left: 28px;
      background-color: #dfd3d3;
    }

    #right {
      top: 3px;
      right: 28px;
      background-color: #dfd3d3;
    }
  }
  #selector-wrapper > div {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  p{
      font-size: 12px;
      position: relative;
      top: 10px;
      left:15px
  }
`;
function ThemeToggle(){


    return <ToggleWrapper>
        <p>Dark mode</p>
        <div id='selector-wrapper'>
            <div id="left"></div>
            <input type="checkbox" name="theme" id="theme-selector" />
            <div id="right"></div>
        </div>
    </ToggleWrapper>
}

export default ThemeToggle;