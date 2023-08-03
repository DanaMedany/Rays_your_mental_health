import React from "react";
import { styled } from "styled-components";
import WorkProcess from "./WorkProcess";
import Booking from "./Booking";

function Section() {
  return (
    <>
      <Wrap>
        <Container>
          <ContentText>
            <h5>We Provide All Health Care Solution</h5>
            <h1>Protect Your Health And Take Care To Of Your Health</h1>
            <ReadMore>ReadMore</ReadMore>
          </ContentText>
          <ContentImage>
            <img src="/images/IMG_6482-removebg-preview.png" alt="" />
          </ContentImage>
        </Container>
        {/* Adding the WorkProcess component */}
        <WorkProcess />
        <Booking />
      </Wrap>
    </>
  );
}

export default Section;

const Wrap = styled.div`
  background-image: url("/images/bg1.c53c8971d16c9a1033ae.jpg");
  position: relative;
  background-size: cover;
  z-index: 1;
  background-position: top center;
  background-repeat: no-repeat;
  height: 550px;

  &::after {
    background-image: url("/images/shape1.1112f1ac0dc18e511a91.png");
    background-size: 100%;
    background-position: 0 100%;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const Container = styled.section`
  max-width: 1128px;
  margin: auto;
  display: flex;
  margin-top: 120px;
  align-items: center;
  justify-content: space-between;
`;

const ContentText = styled.div`
  width: 60%;
  margin: 0 auto;

  h5 {
    font-size: 16px;
    margin: 0 0 15px;
    line-height: 1.3;
    font-weight: 700;
    padding: 5px 15px;
    color: rbg(86, 90, 207);
  }
  h1 {
    max-width: 500px;
    font-size: 38px;
    margin-bottom: 50px;
    color: #1f2278;
    font-weight: 800;
    line-height: 1.3;
    padding: 5px 15px;
  }

  @media (max-width: 768px) {
    margin: 60px 30px;
  }
`;

const ReadMore = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  padding: 20px 45px;
  background-color: #f17732;
  font-size: 16px;
  border-radius: 8px;
  margin-left: 15px;
`;

const ContentImage = styled.div`
  img {
    width: 300px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      width: 220px;
    }
  }
`;
