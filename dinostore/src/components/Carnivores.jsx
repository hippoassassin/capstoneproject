import { useEffect, useState } from "react";
import styled from "styled-components";
import { meateaters } from "../dinoinfo";
import Carnivore from "./Carnivore";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// iterates through my DB for type=Carn
const Carnivores = ({ type }) => {
  const [carnivores, setDinos] = useState([]);
  useEffect(() => {
    const getDinos = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/dinos?type=Carn"
        );
        setDinos(res.data); //console.log(res);
      } catch (err) {}
    };
    getDinos();
  }, [type]);
  return (
    <Container>
      {carnivores.map((item) => (
        <Carnivore item={item} />
      ))}
    </Container>
  );
};

export default Carnivores;
