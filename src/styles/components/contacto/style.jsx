import styled from "styled-components";

import bgform from "../../../assets/bg-form-contacto.jpg";

export const Contacto = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: #f3f3f3;
  padding: 35px 30px 50px;
  width: 100%;

  h4 {
    font-size: 24px;
    text-align: center;
  }

  p {
    font-size: 16px;
    color: #767575;
    line-height: 28px;
    margin: 15px 10px 20px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;

    @media screen and (max-width: 576px) {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
    }

    width: 500px;
    height: 450px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${bgform});

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    input {
      height: 46px;
      padding: 5px 10px;
      width: 45%;
      margin: 10px 5px;
      background: #ffffff;
      transition: all 0.4s;

      @media screen and (max-width: 576px) {
        width: 100%;
      }

      :focus {
        transform: scale(1.03);
      }
    }

    textarea {
      width: 95%;
      background: #ffffff;
      align-self: center;
      padding: 5px 15px;
      margin: 10px 5px;
      transition: all 0.4s;

      @media screen and (max-width: 576px) {
        width: 100%;
      }

      :focus {
        transform: scale(1.03);
      }
    }

    button {
      background: #0066ff;
      height: 46px;
      width: 120px;
      font-size: 16px;
      color: #ffffff;
      border: 2px solid #ffffff;
      transition: all 0.4s;

      :hover {
        color: #0066ff;
        background: #ffffff;
        border: 2px solid #0066ff;
        cursor: pointer;
      }

      @media screen and (max-width: 576px) {
        width: 100%;
        margin: 10px 0 0;
      }
    }
  }
`;
