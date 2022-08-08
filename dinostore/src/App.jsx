import Home from "./pages/Home";
import Dinosaur from "./pages/Dinosaur";
import HerbivoreList from "../src/pages/HerbivoreList";
import CarnivoreList from "../src/pages/CarnivoreList";
import Login from "../src/pages/Login";
import Cart from "../src/pages/Cart";
import Register from "../src/pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-lineimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEgg,
  faWheatAwn,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

library.add(faEgg, faWheatAwn, faArrowLeft, faArrowRight);

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dinos/herbivores">
          <HerbivoreList />
        </Route>
        <Route path="/dinos/carnivores">
          <CarnivoreList />
        </Route>
        <Route path="/dinosaur/:id">
          <Dinosaur />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
          <Login />
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
