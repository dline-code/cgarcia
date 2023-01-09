import styled from "styled-components";

import pointhistorybg from "../../../assets/point-history-bg.jpg";

export const NossaHistoria = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 35px 50px;
  height: 600px;
  margin: 0 auto 0;
  background: #f7f7f7;
  overflow: auto;
`;

export const PointHistory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  min-width: 200px;
  max-width: 200px;
  height: 100%;

  :nth-child(3),
  :nth-child(5) {
    justify-content: flex-end;
  }

  div {
    width: 100%;
    height: 200px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${pointhistorybg});
    background-size: cover;
    border-radius: 25px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      color: #ffffff;
      text-align: center;
      font-size: 13px;
    }
  }

  span {
    height: 60px;
    background: #0066ff;
    width: 7px;
  }
`;

export const TimeLine = styled.section`
  position: absolute;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    width: 100%;
    padding: 5px 15px;
    background: #0066ff;
    margin: 0;
  }

  span {
    padding: 10px;
    background: #0066ff;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    :first-child {
      margin-right: -2px;
    }

    :last-child {
      margin-left: -2px;
    }
  }
`;

export const HeaderHistoria = styled.div`
  background: #f7f7f7;
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 20px auto 35px;
  }

  p {
    color: #767575;
    font-weight: 450;
    line-height: 32px;
    letter-spacing: 0.5px;
  }
`;

export const ContainerButton = styled.div`
  background: #f7f7f7;
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
  padding-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    color: #ffffff;
    background: #0066ff;
    padding: 8px 20px;
    font-size: 18px;
    text-transform: capitalize;
    border-radius: 5px;
    transition: all 0.4s;

    :hover {
      background: transparent;
      border-radius: 50%;
      color: #0066ff;
      cursor: pointer;
    }
  }
`;
