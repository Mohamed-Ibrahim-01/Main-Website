import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home, Navbar, Footer, Contact, Magazine} from './modules'

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route path="/ContactUs"> <Contact /> </Route>
                <Route path="/Magazine">  <Magazine/> </Route>
                {/*
                <Route path="*"> <NotFound /> </Route>
                */}
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App
