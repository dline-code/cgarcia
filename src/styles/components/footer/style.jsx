import styled from "styled-components";

const FooterTag = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  height: 400px;
  background: #393939;
  padding-top: 25px;

  @media screen and (max-width: 756px) {
    height: auto;
  }

  article {
    width: 100%;
    padding: 10px 35px;

    img {
      width: 50px;
    }
  }

  div {
    width: 350px;
    height: 300px;
    min-width: 250px;
    max-width: 30%;
    overflow: hidden;
    padding: 10px;

    @media screen and (max-width: 576px) {
      width: 100%;
      max-width: 100%;
      border-bottom: 1px solid #eee;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h4 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 20px;
      color: #f7f7f7;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      > ul {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;

        > li {
          width: 100%;
          padding: 8px;
          margin: 5px 0px;
          color: #f7f7f7;

          ul {
            display: flex;

            li {
              display: flex;

              a {
                width: 32px;
                height: 32px;
                margin: 0 7px;
                font-size: 20px;

                background: #f7f7f7;
                color: #393939;
                border-radius: 20px;
                transition: all 0.4s;

                display: flex;
                align-items: center;
                justify-content: center;

                :hover {
                  border-radius: 0;
                  background: #393939;
                  color: #f7f7f7;
                }
              }
            }
          }
        }
      }
    }
  }

  span {
    width: 100%;
    align-self: flex-end;
    text-align: center;

    background: #0066ff;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    font-weight: 700;
    font-size: 14px;
    color: #f7f7f7;
  }
`;

export default FooterTag;
