import styled from "styled-components";

export const QuemSomos = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 1140px;
  margin: 25px auto 20px;
  padding: 25px 0 50px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: auto 25px auto;
  }

  h2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  > p {
    font-size: 16px;
    line-height: 28px;
    color: #767575;
    text-align: center;
    margin-bottom: 25px;
  }

  > div {
    width: 100%;
    margin: 25px 0;

    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and(max-width: 768px) {
      flex-direction: column;
    }

    img {
      width: 45%;

      @media screen and (max-width: 768px) {
        width: 90%;
        margin: 15px auto;
        order: 1;
      }
    }

    > div {
      width: 50%;

      @media screen and (max-width: 768px) {
        width: 90%;
      }

      p {
        font-size: 15px;
        font-weight: 400;
        color: #767575;
        line-height: 32px;
        margin: 10px 0;
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
