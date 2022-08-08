import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 30px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 175px;
`;
const Type = styled.h1`
  color: black;
  font-size: 100px;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
    1px 1px 0 white;
  ${mobile({
    paddingBottom: "100px",
  })}
`;
const Button = styled.button`
  margin-top: -20px;
  border: none;
  background-color: white;
  font-size: 40px;
  border-radius: 60px;
  cursor: pointer;
  ${mobile({
    marginBottom: "400px",
  })}
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Type>{item.type}</Type>
        <Link to={`/dinos/${item.type}`}>
          <Button>Feed Me</Button>
        </Link>
      </Info>
    </Container>
  );
}

export default CategoryItem;
