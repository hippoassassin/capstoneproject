import styled from "styled-components";
import Hammond from "../components/Hammond";
import Navbar from "../components/Navbar";
import Carnivores from "../components/Carnivores";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  margin-top: 100px;
  font-size: 100px;
`;
const CarnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CarnivoreList = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  return (
    <Container>
      <Hammond />
      <Navbar />
      <Title>{type}</Title>
      <CarnContainer>
        <Carnivores type={type} />
      </CarnContainer>
      <Newsletter />
    </Container>
  );
};

export default CarnivoreList;
