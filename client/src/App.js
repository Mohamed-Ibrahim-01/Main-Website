import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar,Footer,Home,ContactUs,NotFound} from "./components/MyComponents"
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/ContactUs"> <ContactUs /> </Route>
        <Route path="*"> <NotFound /> </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
