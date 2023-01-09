import styled from "styled-components";

import bgrights from "../../assets/bg-rights-and-due.jpg";

export const RightsAndDue = styled.section`
  .title {
    margin-bottom: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 100%;
    height: 100%;
    padding: 6.3vh 6vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${bgrights});

    background-position: center;
    background-size: cover;

    color: #ffffff;

    h3 {
      font-size: 20px;
      color: #ffffff;
      margin: 10px 0 15px;
    }
    ol {
      li {
        margin-left: 15px;
        p {
          font-size: 18px;
          margin-left: 20px;
          line-height: 35px;
          color: whitesmoke;
        }
      }
    }
    .hero:last-child {
      margin-top: 5vh;
    }
  }
`;
