import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hammond from "../components/Hammond";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import { useEffect, useState } from "react";
import { addDinosaur } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";

const Container = styled.div``;

const Dinowrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  flex: 1;
  ${mobile({ width: "50px" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Name = styled.h1`
  flex: 1;
  font-weight: 400;
  font-size: 100px;
  ${mobile({ fontSize: "50px", marginRight: "50px" })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 70px;
  flex: 1;
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const FeedContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FeedCounter = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 5px;
  border: 1px solid grey;
  background-color: white;
  cursor: pointer;
  font-size: 25px;
  transition: all 0.5s ease;
  &:hover {
    background-color: red;
    transform: scale(1.1);
  }
`;

const Dinosaur = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [dinosaur, setDinosaur] = useState({});
  const [quantity, setQuantity] = useState(1);
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

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1); //counter cant go below 0
    } else {
      quantity < 3 && setQuantity(quantity + 1); //dinos cannot be fed more then 3 meals at a time
    }
  };

  const handleClick = () => {
    dispatch(addDinosaur({ ...dinosaur, quantity }));
  };

  return (
    <Container>
      <Hammond />
      <Navbar />
      <Dinowrapper>
        <ImgContainer>
          <Image src={dinosaur.img} />
        </ImgContainer>
        <InfoContainer>
          <Name>{dinosaur.title}</Name>
          <Description>{dinosaur.desc}</Description>
          <Price>{dinosaur.price}</Price>
          <FeedContainer>
            <FeedCounter>
              <GrFormSubtract onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <GrAdd onClick={() => handleQuantity("inc")} />
            </FeedCounter>
            <Button onClick={handleClick}>FEED ME</Button>
          </FeedContainer>
        </InfoContainer>
      </Dinowrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Dinosaur;
