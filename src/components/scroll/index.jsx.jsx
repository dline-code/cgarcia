import React, { useState } from "react";
import styled, { css } from "styled-components";

const Up = styled.a`
  position: fixed;
  right: 10px;
  bottom: 10px;
  margin-bottom: -100px;
  ${(props) =>
    props.Y > 10 &&
    css`
      margin-bottom: 0px;
    `}
  background: #3c3d41;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: all 0.7s ease-in-out;

  :hover {
    background: #0066ff;
  }
`;

const Scroll = () => {
  const [Y, setY] = useState(0);

  return (
    <>
      {window.addEventListener("scroll", () => {
        setY(window.scrollY);
      })}

      <Up
        Y={Y}
        onClick={() => {
          window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        <i className="fa fa-chevron-up"></i>
      </Up>
    </>
  );
};

export default Scroll;
