import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
      <Container>
        <HeaderLink>
          <Logo>
            <a href="/">
              <img
                src="/images/Screenshot_2023-08-03_121722-removebg-preview.png"
                alt=""
              />
            </a>
          </Logo>
          <Links>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Appointment</a>
              </li>
            </ul>
            <IconSearch />
            <ContactButton>Contact Us</ContactButton>
          </Links>
        </HeaderLink>
      </Container>
  );
}

export default Header;


const Container = styled.div`
  min-height: 56px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const HeaderLink = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
`;

const Logo = styled.div`
  width: 40px;

  img {
    height: 100px;
    object-fit: cover;
  }
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    flex: 1;
  }
  ul li {
    padding: 0 10px;
    font-size: 16px;
    font-weight: 600;

    a {
      text-transform: uppercase;
      transition: 250ms all ease-in-out;

      &:hover {
        border-bottom: 2px solid rgb(86, 90, 207);
        transform: translateX(100%);
      }
    }
  }
`;

const IconSearch = styled(SearchIcon)`
  margin: 0 20px 0px;
  cursor: pointer;
  color: #565acf;
  font-weight: 900;
`;

const ContactButton = styled.a`
  background-color: rgb(86, 90, 207);
  border-radius: 8px;
  border-width: 2px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  padding: 15px 30px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 20px 0 rgba(86, 90, 207, 0.3);
    background-color: rgba(86, 90, 207, 0.9);
  }
`;
