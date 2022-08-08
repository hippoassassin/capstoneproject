import { useEffect, useState } from "react";
import styled from "styled-components";
import { leafeaters } from "../dinoinfo";
import Herbivore from "./Herbivore";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// iterates through my DB for type=Herb
const Herbivores = ({ type }) => {
  const [herbivores, setDinos] = useState([]);

  useEffect(() => {
    const getDinos = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/dinos?type=Herb"
        );
        setDinos(res.data); //console.log(res);
      } catch (err) {}
    };
    getDinos();
  }, [type]);

  return (
    <Container>
      {herbivores.map((item) => (
        <Herbivore item={item} />
      ))}
    </Container>
  );
};

export default Herbivores;
