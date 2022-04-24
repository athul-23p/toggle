import styled from "styled-components";

const CardWrapper = styled.div`
  /* border: 1px solid red; */
  margin: 10px;
  padding: 10px;
  $bg-bar-height: 7px;
  .user-info {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      margin: 0px 10px;
    }

    p {
      margin: 0px 0px 5px 0px;
      font-size: 14px;
    }

    .location {
      font-size: 12px;
      color: grey;
    }
  }
  .user-stats {
    .level-and-points {
      display: flex;
      justify-content: space-between;
      margin-top: -12px;
      padding: 0px 5px;
    }

    .bold {
      font-weight: 800;
    }
  }

  .progress-bar {
    width: 100%;
  }
  .bar-bg,
  .bar-fg {
    height: 6px;
    width: 100%;
    display: flex;
    margin-top: 15px;
    margin-bottom: 0px;
    & * {
      /* border: 1px solid red; */
      background-color: #dfdbdb;
    }

    .left,
    .right {
      height: 100%;
      width: 8px;
      border-radius: 50%;
      position: relative;
    }
    .left {
      left: 6px;
    }
    .middle {
      height: 100%;
      width: 99%;
    }
    .right {
      right: 6px;
    }
  }

  .bar-fg {
    position: relative;
    bottom: 21px;
    height: 7px;
    width: ${(props) => {
        const { user } = props;
        const width = Math.round(user.points / 60);
        console.log(width + "%");
        return width + "%";
      }};
      & div {
      background-color: dodgerblue;
    }
  }
  .settings{
    color:grey;
    margin-left: 50%;
  }
`;
function UserCard({ user }) {
//   console.log(user);
  return (
    <CardWrapper user={user}>
      <div>
        <div className="user-info">
          <div className="userimg">
            <img src={user.image} alt="" />
          </div>
          <div>
            <p>{user.name}</p>
            <p className="location">{user.location}</p>
          </div>
          <div className="settings">...</div>
        </div>
        <div className="user-stats">
          <div className="progress-bar">
            <div className="bar-bg">
              <div className="left"></div>
              <div className="middle"></div>
              <div className="right"></div>
            </div>
            <div className="bar-fg">
              <div className="left"></div>
              <div className="middle"></div>
              <div className="right"></div>
            </div>
          </div>
          <div className="level-and-points">
            <p>Professional Level {user.professional_level}</p>
            <p className="bold">{user.points} Points</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default UserCard;
