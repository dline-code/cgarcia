import styled, { css } from "styled-components";

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  transition: all 0.4s;

  button {
    background: transparent;
    border: 1px solid #393939;
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 20px;
    padding: 5px 3px;
    cursor: pointer;

    @media screen and (min-width: 1000px) {
      display: none;
    }

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    ${(props) =>
      props.bars === "open" &&
      css`
        justify-content: center;
        .bars-top {
          position: absolute;
          transform: rotate(-45deg);
        }
        .bars-bottom {
          position: absolute;
          transform: rotate(45deg);
        }
        .bars-center {
          display: none;
        }
      `}

    span {
      padding: 1.5px;
      width: 75%;
      background: #393939;
      transition: all 0.5s;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 0px;
  }

  > a > img {
    width: 50px;

    @media screen and (max-width: 1000px) {
      margin: 15px 15px 10px;
    }
  }

  nav {
    display: flex;
    transition: all 0.4s;

    @media screen and (max-width: 1000px) {
      width: 100%;
      background: #393939;
      padding: 0;
      transition: all 0.4s;

      ${(props) =>
        props.bars === "open" &&
        css`
          height: auto;
        `}

      ${(props) =>
        props.bars === "closed" &&
        css`
          height: 0;
        `}
    }

    ul {
      display: flex;
      transition: all 0.4s;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
      }

      li {
        display: flex;
        margin: 0 3px;
        transition: all 0.4s;

        @media screen and (max-width: 1000px) {
          width: 100%;
          margin: 3px 0;
        }

        a {
          display: flex;
          padding: 10px 20px;
          font-weight: 600;
          transition: all 0.4s;

          @media screen and (max-width: 1000px) {
            width: 100%;
            padding: 15px 20px;
            color: #f7f7f7;
          }

          :hover {
            background: #393939;
            color: #f7f7f7;
          }
        }
      }
    }
  }
`;

export default HeaderTag;
