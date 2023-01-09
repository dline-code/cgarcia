import styled from "styled-components";
import NavImage from "../../assets/IEditada.jpg";
import OfertaEducativaImage from "../../assets/imageEditadaOferta.jpg";

export const Nav = styled.nav`
  width: 100%;
  height: 360px;
  background-size: 100% 400px;
  background-repeat: no-repeat;
  background-image: url(${NavImage});

  @media screen (max-width: 700px) {
    background-size: 100% 300px;
    display: none;
  }

  h1 {
    color: white;
    text-align: center;
    padding-top: 140px;
  }

  h4 {
    color: white;
    padding: 135px 50px;
  }

  a: hover {
    width: 15px;
    height: 15px;
    background: white;
    color: black;
    transition: 1.5s;
    border: 1px solid white;
    border-radius: 1.5px;
    padding: 3px;
  }
`;

export const PerfilDeSaida = styled.section`
  width: 100%;
  height: 420px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 600px;
  }

  h1 {
    text-align: center;
    padding-top: 70px;
  }
  div {
    padding: 40px 300px;
    color: #707070;
    line-height: 1.8;

    @media screen and (max-width: 700px) {
      width: 80%;
      height: 400px;
      padding: 0px 0px;
      margin: 10px 34px;
      line-height: 2.3;
      text-align: justify;
    }
  }

  section > p {
    color: #0066ff;
    text-align: center;
    padding-top: 35px;
    font-size: 30px;
  }

  li {
    list-style-type: none;
    color: black;
  }

  li span {
    color: #0066ff;
    margin-right: 7px;
  }
`;

export const Evangelico = styled.section`
  width: 100%;
  height: 450px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 600px;
  }

  .arct1 {
    width: 46%;
    height: 400px;
    float: left;

    @media screen and (max-width: 700px) {
      width: 100%;
      height: 350px;
      margin-top: 5px;
    }
  }

  img {
    width: 450px;
    height: 300px;
    margin: 50px 150px;
    transition: all 0.4s;

    @media screen and (max-width: 700px) {
      width: 90%;
      height: 312px;
      margin: 40px 30px;
    }
  }

  .arct1 > img:hover {
    transform: scale(0.7) rotate(-8deg);
  }
  .arct2 {
    width: 54%;
    height: 250px;
    float: right;
    margin-top: 140px;
    line-height: 1.7;
    color: #707070;

    @media screen and (max-width: 700px) {
      width: 90%;
      height: 150px;
      margin: 70px 20px;
    }
  }

  h1 {
    color: black;
  }
`;

export const Social = styled.section`

width: 100%;
height: 400px;

@media screen and (max-width: 700px){
    width: 100%;
    height: 600px;

    }

img{
    width: 450px;
    height: 350px;
    transition: all 0.4s;
}

h1{
    color: black;
    
}

.arct01{
    width: 40%;
    height: 400px;
    float: left;
    line-height: 1.8;
    color: #707070; 
    margin-left: 150px;

    
    @media screen and (max-width: 700px){
        width: 90%;
        height: 150px;
        margin: 220px 32px;
        text-align: justify;
    }
}
    
}

.arct01 div{
    margin-top: 100px;
}

.arct02{
    width: 47.5%;
    height: 400px;
    float: right;

    @media screen and (max-width: 700px){
        width: 100%;
        height: 350px;
        position: relative;
        bottom: 650px;
       
    }
}

.arct02>img{
    
    @media screen and (max-width: 700px){  
        width: 90%;
        height: 300px;
        margin: 30px 30px;
        
    }
}

.arct02>img:hover{
    transform: scale(0.7) rotate(8deg);
}

`;

export const Comunicativo = styled.section`
  width: 100%;
  height: 450px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 555px;
  }

  .arct1 {
    width: 46%;
    height: 400px;
    float: left;

    @media screen and (max-width: 700px) {
      width: 100%;
      height: 350px;
      position: relative;
      bottom: 410px;
    }
  }

  .arct1 > img {
    width: 450px;
    height: 322px;
    margin: 10px 150px;
    transition: all 0.4s;

    @media screen and (max-width: 700px) {
      width: 90%;
      height: 312px;
      margin: 30px 30px;
    }
  }

  .arct1 > img:hover {
    transform: scale(0.7) rotate(-8deg);
  }
  .arct2 {
    width: 54%;
    height: 250px;
    float: right;
    margin-top: 140px;
    line-height: 1.7;
    color: #707070;

    @media screen and (max-width: 700px) {
      width: 90%;
      height: 200px;
      margin: 0px 20px;
      position: relative;
      bottom: 385px;
    }
  }

  h1 {
    color: black;
  }
`;

export const Curriculo = styled.section`
  width: 100%;
  height: 600px;
  background: #f3f3f3;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 890px;
  }
  h1 {
    color: black;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 10px;

    @media screen and (max-width: 700px) {
      width: 100%;
      position: relative;
      bottom: 360px;
    }
  }

  .arct1 {
    width: 50%;
    height: 400px;
    float: left;

    @media screen and (max-width: 700px) {
      width: 100%;
      height: 400px;
      position: relative;
      bottom: 350px;
    }
  }

  img {
    width: 460px;
    height: 350px;
    margin: 50px 200px;
    transition: all 0.4s;

    @media screen and (max-width: 700px) {
      width: 90%;
      height: 350px;
      margin: 10px 25px;
    }
  }

  .arct1 > img:hover {
    transform: scale(0.8);
  }

  li {
    list-style-type: upper-roman;
  }

  .arct2 {
    width: 46%;
    height: 250px;
    float: right;
    margin-top: 50px;
    line-height: 1.7;
    color: #707070;

    @media screen and (max-width: 700px) {
      width: 100%;
      height: 400px;
      padding-left: 175px;
      flex-direction: column;
      position: relative;
      bottom: 390px;
    }
  }
`;

export const OfertaEducativa = styled.section`
  width: 100%;
  height: 450px;
  background-size: 100% 450px;
  background-repeat: no-repeat;
  background-image: url(${OfertaEducativaImage});
  color: white;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 490px;
    background-size: 100% 490px;

    article {
      width: 100%;
      position: relative;
      bottom: 260px;
      color: white;
      align-items: center;
    }
  }

  .OfertaEducativa {
    width: 100%;
    height: 60px;
    background-color: white;
    margin-top: 50px;

    h1 {
      text-align: center;
      color: black;
      font-size: 18px;

      @media screen and (max-width: 700px) {
        position: relative;
        bottom: 300px;
      }
    }
    @media screen and (max-width: 700px) {
      width: 100%;
      height: 75px;
      border: 1px solid #f3f3f3;
      position: relative;
      z-index: 1;
      bottom: 50px;
    }
  }

  p {
    text-align: center;
    padding-top: 70px;
    font-size: 40px;
  }
  ul {
    width: 1050px;
    height: 100px;
    margin: 60px 100px;

    @media screen and (max-width: 700px) {
      width: 100%;
      height: 300px;
      flex-direction: column;
      margin: 10px 0px;
    }
  }

  li {
    width: 250px;
    height: 100px;
    display: inline-block;
    color: black;
    margin-left: 100px;
    background-color: white;
    text-align: center;
    padding-top: 30px;
    font-weight: bold;
    border-radius: 3px;

    @media screen and (max-width: 700px) {
      width: 210px;
      height: 80px;
      margin: 7px 140px;
    }
  }

  li: hover {
    background-color: black;
    color: white;
    border: 2px solid white;
    border-radius: 3px;
    transition: 1s;
  }
`;
