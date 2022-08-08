import styled from "styled-components";
import { GiAmberMosquito } from "react-icons/gi";
import { IconContext } from "react-icons";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;
const Logo = styled.div`
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Description = styled.p`
  font-size: 50px;
  margin: 25px 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
`;
const Coolicon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left></Left>
      <Center>
        <Logo>Dinostaur</Logo>
        <Description>A website to feed your favorite Dinos</Description>
        <IconContext.Provider value={{ color: "Darkorange", size: "60px" }}>
          <Coolicon>
            <GiAmberMosquito />
          </Coolicon>
        </IconContext.Provider>
      </Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
