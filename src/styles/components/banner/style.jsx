import styled from "styled-components";

import bg from "../../../assets/bg-form-contacto.jpg";

const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  width: 100%;
  position: relative;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bg});
  background-position: start center;
  background-size: cover;

  h1 {
    color: #ffffff;
    font-weight: 700;
    line-height: 45px;
    font-size: 32px;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    color: #ffffff;
  }

  span {
    align-self: flex-start;
    color: #ffffff;
    font-size: 16px;
    position: absolute;
    bottom: 20px;
    margin: 10px 15px;
    font-weight: 600;
  }
`;

export default Banner;
