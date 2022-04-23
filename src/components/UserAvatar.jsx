import styled from "styled-components";
import userimage from "../images/user-avatar.jpg";
const AvatarWrapper = styled.div`
  #user-avatar {
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 50%;
    object-fit: cover;
  }

  &  div {
      border-radius: 50%;
  }
  #outer {
    width: 12px;
    height: 12px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: relative;
    bottom: 42px;
    left:30px;
    /* border: 1px solid red; */
  }
  #inner {
    width: 8px;
    height: 8px;
    display: block;
    background-color: #16be16;
   
  }
`;

function UserAvatar() {

    return (
      <AvatarWrapper>
        <img
          src={userimage}
          alt=""
          id="user-avatar"
        />
        <div id='outer'><div id='inner'></div></div>
      </AvatarWrapper>
    );
}

export default UserAvatar;
