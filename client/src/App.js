import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Navbar,Footer,Home,ContactUs,NotFound} from "./components/MyComponents"
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <Router>
      <Navbar />
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
