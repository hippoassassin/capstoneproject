import styled from "styled-components";
import { GiMonsteraLeaf, GiChewedHeart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import { addDinosaur } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: green;
    transform: scale(1.1);
  }
`;

const Iconh = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: red;
    transform: scale(1.1);
  }
`;

const Herbivore = ({ item }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [dinosaur, setDinosaur] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getDino = async () => {
      try {
        const res = await publicRequest.get("/dinos/find/" + id); //  console.log(location.pathname.split("/")[2]);
        setDinosaur(res.data);
      } catch {}
    };
    getDino();
  }, [id]);

  const handleClick = () => {
    dispatch(addDinosaur({ ...dinosaur }));
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <Link to={`/dinosaur/${item._id}`}>
            <GiMonsteraLeaf />
          </Link>
        </Icon>
        <Iconh>
          <GiChewedHeart onClick={handleClick} />
        </Iconh>
      </Info>
    </Container>
  );
};

export default Herbivore;
