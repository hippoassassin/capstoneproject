import React from "react";
import { GiDinosaurRex } from "react-icons/gi";
import { IconContext } from "react-icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: cornsilk;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 30px;
`;
const Description = styled.div`
  font-size: 35px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 2px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 50px;
`;
const Button = styled.button`
  flex: 1;
  background-color: black;
  border: none;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Keep Up to date with the Staur</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <IconContext.Provider value={{ color: "white", size: "50px" }}>
          <Button>
            <GiDinosaurRex color="white" />
          </Button>
        </IconContext.Provider>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
