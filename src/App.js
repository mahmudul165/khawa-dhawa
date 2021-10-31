import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DisplayMeal from "./Components/DisplayMeal/DisplayMeal";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Item from "./Components/Item/Item";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import FoodSearch from "./Components/FoodSearch/FoodSearch";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/recipe">
            <FoodSearch></FoodSearch>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/meals/:idMeal">
            <Item></Item>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
