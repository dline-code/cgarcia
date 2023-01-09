import styled from "styled-components";

import bgform from "../../assets/bg-form-contacto.jpg";
import testemnuhas from "../../assets/testemunhas-bg.jpg";

export const Anuncios = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f3f3f3;
  padding: 30px 25px 50px;

  @media screen and (max-width: 756px) {
    padding: 20px 15px 40px;
  }

  h2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
  }

  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 35px 0 10px;

    a {
      width: 32px;
      height: 32px;
      color: #ffffff;
      background: #0066ff;
      border-radius: 4px;
      margin: 0 5px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    transition: all 0.4s;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    :hover {
      cursor: pointer;
      border-radius: 0;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      transform: scale(1.05);

      img {
        border-radius: 0;
      }
    }

    @media screen and (max-width: 576px) {
      width: 100%;
    }

    @media screen and (min-width: 577px) and (max-width: 756px) {
      width: 80%;
    }

    margin: 20px;
    width: 300px;

    img {
      width: 100%;
      transition: all 0.4s;

      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    > div {
      padding: 20px;

      h3 {
      }

      p {
        margin: 15px 0 25px;
      }

      a {
        color: #ffffff;
        background: #0066ff;
        font-size: 16px;
        padding: 5px 10px;
        border-radius: 5px;
        transition: all 0.3s;

        :hover {
          color: #0066ff;
          background: #ffffff;
          border-radius: 50%;
        }
      }
    }
  }
`;

export const Professores = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 35px;

  > span {
    position: absolute;
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0 30px 0;
    margin-right: 2%;

    button {
      margin: 10px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 25px 30px 35px;

    h3 {
      width: 100%;
      font-size: 24px;
      line-height: 40px;
    }

    p {
      width: 100%;
      color: #767575;
      margin: 10px 0 20px;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px;
        width: 20%;

        @media screen and (max-width: 576px) {
          width: 40%;
        }

        @media screen and (min-width: 577px) and (max-width: 768px) {
          width: 40%;
        }

        :first-child {
          margin-left: 0px;
        }

        > div {
          img {
            width: 100%;
          }

          div {
            padding: 20px;
            background: rgb(0, 102, 255, 0.3);

            h4 {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 7px;
            }

            span {
              color: #767575;
            }
          }
        }
      }
    }
  }
`;

export const Banner = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 500px;
  width: 100%;
  overflow: hidden;

  > div {
    width: 100%;
    flex: 0 0 100%;
    height: 500px;
    padding: 20px 30px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(${bgform});
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 32px;
      color: #ffffff;
      letter-spacing: 1px;
      text-align: center;

      @media screen and (max-width: 756px) {
        font-size: 24px;
      }
    }

    p {
      color: #e0e0e0;
      margin: 15px 0 25px;

      @media screen and (max-width: 756px) {
        font-size: 13px;
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        background: #0066ff;
        color: #ffffff;
        font-size: 16px;
        line-height: 28px;
        border-radius: 4px;
        padding: 5px 10px;
        border: 2px solid #ffffff;
        margin: 3px 10px;
        cursor: pointer;
      }
    }
  }
`;

export const Navigation = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: row !important;
  justify-content: space-between !important;
  width: 100%;
  height: 500px;
  padding: 15px 5px !important;
  background: transparent !important;

  > div {
    position: absolute;
    bottom: 30px;
    left: 45%;
    align-self: flex-end;
    display: flex;

    > span {
      position: relative;
      margin: 2px 10px;
      cursor: pointer;

      ::before {
        position: absolute;
        content: "";
        /* background: #ffffff; */
        border: 1px solid #ffffff;
        height: 10px;
        width: 10px;
        border-radius: 50%;
      }

      :first-child {
        ::before {
          background: #ffffff;
        }
      }
    }
  }
`;

export const Testemunhas = styled.section`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${testemnuhas});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;

  h1 {
    color: #fff;
    font-size: 42px;
    font-weight: 500;
    margin-bottom: 25px;
  }

  > p {
    color: #999;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    text-align: center;
  }

  > div {
    max-width: 605px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    transition: all 0.6s;

    > div {
      position: absolute;
      left: 0;
      width: 100%;
      height: 20%;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    img {
      width: 50px;
      border-radius: 50%;
    }

    p {
      border-radius: 3px;
      margin-top: 20px;
      padding: 30px 20px;
      background: #ffffff;
      color: #373737;
      text-align: center;
      font-size: 18px;
      font-weight: 500;

      display: flex;
      flex-direction: column;

      span {
        color: #373737;
        padding: 0 0 10px;
        font-size: 20px;
        font-weight: 600;

        i {
          color: #eea412;
          margin-right: 12px;
          font-size: 37px;
        }
      }
    }

    article {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      img {
        margin: 12px;
      }

      span {
        color: #fff;
        font-weight: 500;
        font-size: 20px;
      }
    }
  }
`;

export const QuadroDestaque = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 25px 20px 80px;
  background: #ecf4ff;

  @media screen and (max-width: 756px) {
    padding: 15px 10px 40px;
  }

  > img {
    align-self: flex-end;
    width: 75px;
    margin-top: -100px;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0 25px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding: 5px 10px;
  }

  article {
    width: 100%;
    height: 200px;
    margin: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
      height: auto;
    }

    h3 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0 15px;
    }

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      min-width: 250px;
      margin: 10px 15px;

      @media screen and (max-width: 756px) {
        margin: 25px 10px;
      }

      img {
        width: 75px;
        border-radius: 50%;
        margin-bottom: 15px;
        border: 2px solid #0066ff;
      }

      p {
        font-size: 18px;
        font-weight: 600;
      }

      span {
        font-size: 16px;
        font-weight: 500;
        line-height: 3px;
      }
    }
  }
`;

export const NiveisAcademicos = styled.section`
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
  padding: 50px 0;

  h2 {
    text-align: center;
    font-size: 26px;
  }

  p {
    margin: 25px 10px 50px;
    color: #767575;
    line-height: 36px;
    text-align: center;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 756px) {
      flex-direction: column;
    }

    div {
      width: 33.3333333%;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s;

      @media screen and (max-width: 756px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
      }

      :nth-child(2) {
        > div {
          background: rgba(0, 0, 0, 0.7);
        }
      }

      > div {
        position: absolute;
        background: rgb(0, 102, 255, 0.7);

        :hover {
          background: rgba(0, 0, 0, 0.7);

          a {
            font-size: 28px;
          }
        }

        a {
          width: 100%;
          height: 100%;
          color: #ffffff;
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          transition: all 0.4s;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export const PlanoPagamento = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7f7f7;
  padding: 40px 15px 70px;
  margin: 30px auto;

  @media screen and (max-width: 756px) {
    padding: 20px 5px 30px;
  }

  > h2 {
    font-weight: 500;
    margin: 15px auto 10px;
  }

  > p {
    text-align: center;
    margin: 30px 10px 70px;
    color: #767575;
    line-height: 26px;
    font-weight: 500;
    font-size: 15px;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const PlanoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #b7b7b7;
  margin: 5px 10px;
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    transform: scale(1.05);

    > div {
      ul {
        li {
          :first-child {
            color: #0066ff;
          }
        }
      }
    }

    > h3 {
      background: #0066ff;
    }

    > i {
      color: #000000;
    }
  }

  @media screen and (max-width: 756px) {
    margin: 15px 5px;
  }

  @media screen and (max-width: 576px) {
    width: 80%;
  }

  > i {
    color: #0066ff;
    font-size: 50px;
    line-height: 70px;
    margin-top: 30px;
    transition: all 0.4s;
  }

  > h3 {
    color: #ffffff;
    background: #000000;
    width: 100%;
    padding: 30px 50px;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    transition: all 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > a {
    padding: 7px 25px;
    color: #ffffff;
    background: #000000;
    text-transform: uppercase;
    margin: 5px 10px 25px;
    transition: all 0.4s;
    border-radius: 25px;
    font-weight: 500;
    letter-spacing: 1px;

    :hover {
      background: #0066ff;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 15px;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 24%;

      li {
        display: table-cell;
        font-size: 16px;
        font-size: 14px;
        line-height: 40px;
        color: #232323;
        transition: all 0.4s;

        :first-child {
          font-weight: 700;
        }
      }
    }
  }
`;

export const Seta = styled.button`
  background: #0066ff;
  width: 40px;
  height: 40px;
  font-size: 24px;
  color: #ffffff;
  line-height: 40px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;
  border: 2px solid transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: #0066ff;
    background: #ffffff;
    border: 2px solid #0066ff;
  }

  @media screen and (max-width: 756px) {
    height: 30px;
    width: 30px;
    font-size: 18px;
  }
`;
