import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hammond from "../components/Hammond";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router-dom";
import { mobile } from "../responsive";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 300;
  text-align: center;
  font-size: 100px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ display: "none" })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Dino = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DinoDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  ${mobile({ width: "100px" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const DinoName = styled.span``;

const Foodtype = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FeedPrice = styled.div`
  font-size: 50px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 99%;
  background-color: chartreuse;
  color: white;
  font-size: 100px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data, dinosaurs: res.cart });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Hammond />
      <Navbar />
      <Wrapper>
        <Title>You Fed</Title>
        <Top>
          <TopTexts>
            <TopText></TopText>
            <TopText>Fav Dinos</TopText>
          </TopTexts>
          <TopButton type="filled">Pick another dino</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.dinos.map((dinosaur) => (
              <Dino>
                <DinoDetails>
                  <Image src={dinosaur.img} />
                  <Details>
                    <DinoName>{dinosaur.title}</DinoName>
                    <Foodtype />
                  </Details>
                </DinoDetails>
                <PriceDetail></PriceDetail>
                <FeedPrice>{dinosaur.price}</FeedPrice>
              </Dino>
            ))}
          </Info>
          <Summary>
            <SummaryItem></SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Dinostaur"
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Feed</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
