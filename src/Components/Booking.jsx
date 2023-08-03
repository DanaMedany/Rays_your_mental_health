import { styled } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <Container>
      <Image>
        <img src="/images/book-removebg-preview.png" alt="" />
        <img src="/images/images-removebg-preview.png" alt="" />
      </Image>
      <Content>
        <h1>Book an appointment</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit
          animi saepe fuga a, consequuntur soluta, quis deleniti quod reiciendis
          eos, dicta voluptatum. Iure dolores harum voluptas mollitia earum
          temporibus.
        </p>
        <Link to = "/appointment">
          <span>Book An Appointment</span>
        </Link>
      </Content>
    </Container>
  );
}

export default Booking;

const Container = styled.section`
  margin: 80px 40px;
  max-width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.div`
  background-color: rgba(86, 90, 207, 0.195);
  display: flex;
  align-items: center;
  width: 300px;

  img {
    width: 200px;
    object-fit: contain;
  }
`;

const Content = styled.div`
  max-width: 550px;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
  }

  span {
    background-color: rgb(86, 90, 207);
    border-radius: 8px;
    border-width: 2px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    padding: 15px 30px;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-block;
    margin-top: 20px;
    color: white;
  }
`;
