import styled from "styled-components";
import { dinotypes } from "../dinoinfo";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Encloser = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
    justifyContent: "none",
  })}
`;

const Dinotype = () => {
  return (
    <Encloser>
      {dinotypes.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Encloser>
  );
};

export default Dinotype;
