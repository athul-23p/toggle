import styled from "styled-components";
import UserCard from "./UserCard";
import img1 from "../images/user-1.jpg";
import img2 from "../images/user-2.jpg";
import img3 from "../images/user-3.png";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const StatisticsWrapper = styled.div`
  background-color: ${(props) => {
    const { selected, theme } = props.theme;
    return theme[selected].stat_bg;
  }};
  margin: 10px 20px;
  #title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;

    h3 {
      font-weight: 400;
    }

    p {
      font-size: 12px;
    }
  }
`;

function Statistics() {
  const userDetails = [
    {
      name: "Nrupul Dev",
      location: "Banglore, India",
      professional_level: 15,
      points: 4723,
      image: img1,
      pgb_color: "#29cc97",
    },
    {
      name: "Sandhya",
      location: "Banglore, India",
      professional_level: 11,
      points: 2338,
      image: img2,
      pgb_color: "#4072ed",
    },
    {
      name: "Elon Tusk",
      location: "California, USA",
      professional_level: 6,
      points: 1884,
      image: img3,
      pgb_color: "#b658f6",
    },
  ];

  const { activeTheme } = useContext(ThemeContext);

  return (
    <StatisticsWrapper theme={activeTheme}>
      <div id="title">
        <h3>Active Users</h3>
        <p>for August 2020</p>
      </div>
      <div>
        <div>
          {userDetails.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </StatisticsWrapper>
  );
}

export default Statistics;
