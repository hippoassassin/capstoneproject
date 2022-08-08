import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Leftcolumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.7px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 27px;
  padding: 5px;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  font-size: 30px;
`;

const Centercolumn = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  background-color: white;
  font-weight: 400;
  font-size: 100px;
  ${mobile({ fontSize: "50px", marginRight: "70px" })}
`;
const Rightcolumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const DinoMenu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-size: 30px;
  ${mobile({ fontSize: "20px", marginLeft: "10px", marginRight: "15px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Leftcolumn>
          <SearchContainer>
            <Input placeholder="Search" />
            <FontAwesomeIcon
              style={{ color: "gray", fontSize: "20px" }}
              icon="fa-solid fa-egg"
            />
          </SearchContainer>
        </Leftcolumn>
        <Centercolumn>
          <Logo>Dinostaur</Logo>
        </Centercolumn>
        <Rightcolumn>
          <Link to="/Register">
            <DinoMenu>Register</DinoMenu>
          </Link>
          <Link to="/Login">
            <DinoMenu>SIGN IN</DinoMenu>
          </Link>
          <Link to="/cart">
            <DinoMenu>
              <FontAwesomeIcon icon="fa-solid fa-wheat-awn" />
            </DinoMenu>
          </Link>
        </Rightcolumn>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
