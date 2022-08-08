import styled from "styled-components";
import Hammond from "../components/Hammond";
import Navbar from "../components/Navbar";
import Herbivores from "../components/Herbivores";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const HerbContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HerbivoreList = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  return (
    <Container>
      <Hammond />
      <Navbar />
      <Title>{type}</Title>
      <HerbContainer>
        <Herbivores type={type} />
      </HerbContainer>
      <Newsletter />
    </Container>
  );
};

export default HerbivoreList;
