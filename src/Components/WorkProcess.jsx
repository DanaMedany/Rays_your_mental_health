import React from "react";
import { styled } from "styled-components";

function WorkProcess() {
  return (
    <Container>
      <h2>How We Works?</h2>

      <Boxes>
        <BoxLeft>
          <h1>01</h1>
          <h3>Make Appointment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            doloremque facere magnam, eveniet consequatur officiis.
          </p>
          <a href="/">View More</a>
        </BoxLeft>
        <BoxMiddle>
          <h1>02</h1>
          <h3>Take Treatment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            doloremque facere magnam, eveniet consequatur officiis.
          </p>
          <a href="/">View More</a>
        </BoxMiddle>
        <BoxRight>
          <h1>03</h1>
          <h3>Registration</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            doloremque facere magnam, eveniet consequatur officiis.
          </p>
          <a href="/">View More</a>
        </BoxRight>
      </Boxes>
    </Container>
  );
}

export default WorkProcess;

const Container = styled.div`
  margin-top: 130px;

  h2 {
    margin-bottom: 40px;
    text-align: center;
    font-size: 45px;
    color: #1f2278;
    line-height: 1.3;
    font-weight: 700;
  }
`;

const Boxes = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  gap: 1rem;
  margin: 0 60px;
  position: relative;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(320px, 1fr));
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(320px, 1fr));
  }
`;

const BoxLeft = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 60px 0 rgba(31, 34, 120, 0.1);
  overflow: hidden;
  padding: 40px 30px;
  position: relative;
  transition: all 0.5s;
  transform: translateY(0);
  z-index: 1;

  &::before {
    background-color: #f17732;
    content: "";
    height: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.5s;
    width: 100%;
    z-index: -1;
  }

  h1 {
    color: #f17732;
    font-size: 80px;
    font-weight: 900;
    line-height: 80px;
    margin-bottom: 30px;
    text-shadow: 0 10px 0 #ffe3d3;
    transition: all 0.5s;
  }

  h3 {
    line-height: 1.3;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 30px;
  }

  a {
    background-color: #e1e2f6;
    border: 2px solid #e1e2f6;
    color: #565acf;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.2;
    padding: 15px 30px;
    text-decoration: none;
    transition: all 0.5s;
    cursor: pointer;
  }

  &:hover {
    h3,
    p,
    a {
      color: #f17732;
    }
  }
`;

const BoxMiddle = styled.div`
  position: relative;
  padding: 40px 30px;

  &::before {
    content: "";
    position: absolute;
    transition: all 0.5s;
    width: 100%;
    height: 100%;
    z-index: -1;
    right: 0;
    top: 0;
    background-color: rgb(241, 119, 50);
    border-radius: 8px;
  }

  h1 {
    color: #fff;
    text-shadow: 0 10px 0 #ffe3d3;
    color: transparent;
    font-size: 80px;
    font-weight: 900;
    line-height: 80px;
    margin-bottom: 30px;
    transition: all 0.5s;
  }

  h3 {
    line-height: 1.3;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 30px;
  }

  a {
    font-weight: 600;
    border: 2px solid #e1e2f6;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.2;
    padding: 15px 30px;
    text-decoration: none;
    transition: all 0.5s;
    background-color: white;
    color: rgb(241, 119, 50);
  }
`;

const BoxRight = styled(BoxLeft)``;
