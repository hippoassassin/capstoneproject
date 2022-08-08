import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/login.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 5px 0px 0px;
`;
const Button = styled.button`
  font-size: 25px;
  width: 40%;
  border: none;
  padding: 5px 5px;
  margin-top: 10px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 37px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
`;

const Login = () => {
  const [username, setUsername] = useState(""); // both params starting empty
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Welcome
          </Button>
        </Form>
        {error && <Error>You didnt say the magic word</Error>}
      </Wrapper>
    </Container>
  );
};

export default Login;
