import styled from "styled-components";
import UserCard from "./UserCard";
import img1 from "../images/user-1.jpg";
import img2 from "../images/user-2.jpg";
import img3 from "../images/user-3.png";

const StatisticsWrapper = styled.div`
  #title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    /* border:1px solid red; */

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
      "name": "Nrupul Dev",
      "location": "Banglore, India",
      "professional_level": 15,
      "points": 4723,
      "image": img1,
    },
    {
      "name": "Sandhya",
      "location": "Banglore, India",
      "professional_level": 11,
      "points": 2338,
      "image": img2,
    },
    {
      "name": "Elon Tusk",
      "location": "California, USA",
      "professional_level": 6,
      "points": 1884,
      "image": img3,
    },
  ];
  return (
    <StatisticsWrapper>
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
