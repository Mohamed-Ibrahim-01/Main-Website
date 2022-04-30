import React from "react"
import Navbar from "./navbar"
import logo from "../images/logo.png"

export default function NavBarContainer(){
    return (
        <Navbar>
            <Navbar.Toolbar>
                <Navbar.Logo to='/' src={logo} alt="logo"/>
                <Navbar.Links>
                    <Navbar.Link to='/'>Home</Navbar.Link>
                    <Navbar.Link to='/ContactUs'>ContactUs</Navbar.Link>
                    <Navbar.Link to='/Magazine'>Magazine</Navbar.Link>
                </Navbar.Links>
                <Navbar.Menu/>
            </Navbar.Toolbar>
        </Navbar>
    )
}
