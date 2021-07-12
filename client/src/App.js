import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home,ContactUs,NotFound} from "./components/MyComponents"
import { FooterContainer } from './containers/Footer'
import { NavBarContainer } from './containers/Navbar'

function App() {
  return (
    <Router>
      <NavBarContainer />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/ContactUs"> <ContactUs /> </Route>
        <Route path="*"> <NotFound /> </Route>
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
