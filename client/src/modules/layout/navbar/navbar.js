import React, { useState } from "react"
import PropTypes from "prop-types"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import {
    StyledAppBar,
    StyledToolBar,
    Logo,
    StyledButton,
    StyledLink,
    LinksContainer,
    StyledMenuIcon,
    MenuContainer,
    MenuButton,
    StyledListItemText,
    StyledImportContactsIcon,
    StyledMessageIcon,
    MenuList,
    StyledMenuItem,
    StyledHomeIcon,
    CloseButton,
    StyledCloseIcon

} from "./styles"

export default function Navbar({children}){
    return <StyledAppBar> {children} </StyledAppBar>
}

Navbar.propTypes= {
    children: PropTypes.node.isRequired
}

Navbar.Toolbar = function NavbarToolbar({children}){
    return <StyledToolBar> {children} </StyledToolBar>
}

Navbar.Toolbar.propTypes= {
    children: PropTypes.array.isRequired
}

Navbar.Logo = function NavbarLogo({to, src, alt}){
    return (
        <StyledLink to={to}>
            <Logo  src={src} alt={alt}/>
        </StyledLink>
    )
}

Navbar.Logo.propTypes= {
    to: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.node.isRequired
}

Navbar.Link = function NavbarLink({children, to}){
    return (
        <StyledLink to={to}>
            <StyledButton> {children} </StyledButton>
        </StyledLink>
    )
}

Navbar.Link.propTypes= {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

Navbar.Links = function NavbarLinks({children}){
    return (
        <LinksContainer>{children}</LinksContainer>
    )
}

Navbar.Links.propTypes= {
    children: PropTypes.array.isRequired
}

Navbar.Menu = function NavbarMenu(){
    const [anchorEl, setAnchorEl] = useState(null)
    const [toggle, setToggle]=React.useState(true)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setToggle(toggle => !toggle)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setToggle(toggle => !toggle)
    }

    return (
        <MenuContainer>
            <button1 onClick ={handleClick}  >{toggle?<NavMenuButton/>:<NavCloseButton/>}</button1>
            <MenuList
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavMenuItem to='/' text="Home" icon={<StyledHomeIcon/>}/>
                <NavMenuItem to='/Magazine' text="Magazine" icon={<StyledImportContactsIcon/>}/>
                <NavMenuItem to='/ContactUs' text="Contact Us" icon={<StyledMessageIcon/>}/>
            </MenuList>
        </MenuContainer>
    )
}

function NavMenuButton({onClick}){
    return (
        <MenuButton onClick={onClick}> <StyledMenuIcon /> </MenuButton>
    )
}
function NavCloseButton({onClick}){
    return(<CloseButton onClick={onClick}> <StyledCloseIcon /> </CloseButton>
    )
   
}

NavMenuButton.propTypes={
    onClick: PropTypes.func.isRequired
}
NavCloseButton.propTypes={
    onClick: PropTypes.func.isRequired
}

function NavMenuItem(props){
    const {to, icon, text} = props
    return (
        <StyledLink to={to}>
            <StyledMenuItem {...props}>
                <ListItemIcon> {icon} </ListItemIcon>
                <StyledListItemText >{text}</StyledListItemText>
            </StyledMenuItem>
        </StyledLink >
    )
}

NavMenuItem.propTypes= {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
}
