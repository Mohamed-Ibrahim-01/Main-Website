import React from 'react'
import {AppBar,Toolbar,Button} from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
const useStyles = makeStyles(theme => ({
   navbar : {
    backgroundColor : '#000B26',
    justifyContent: 'flex-start',
    width:'100vw',
    position: 'fixed',
    top:'0px',
   },

   navbar_btn: {
    marginRight: theme.spacing(2),
    fontFamily: '"Varela Round", sans-serif',
    fontSize : '0.89em',
    backgroundColor : '#000B26',
    textTransform:'none',
    padding : '4px',
    fontWeight : 'bold',
    color : '#DB2A32',
    "&:hover": {
      //backgroundColor: '#28ABE3',
      //TransitionEvent:'',
      color : '#28ABE3',
    } 
   },

   logo:{
    height: '60px',
    marginRight : '10px'
   }
}))
function Navbar() {
    const classes = useStyles();
    return (
    <AppBar position='static' className={classes.navbar}>
        <Toolbar className={classes.navbar}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Link  to='/'>
                <Button className={classes.navbar_btn} >Home</Button>
            </Link>

            <Link  to='/ContactUs'>
                <Button className={classes.navbar_btn} > Contact Us </Button>
            </Link>
            <Link  to='/Articles'>
                <Button className={classes.navbar_btn} > Articles </Button>
            </Link>
            <Link  to='/Magazine'>
                <Button className={classes.navbar_btn} > Magazine </Button>
            </Link>
        </Toolbar>
    </AppBar>
    )
}

export default Navbar
