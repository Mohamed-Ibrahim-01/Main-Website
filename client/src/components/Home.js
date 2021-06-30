import React from 'react'
import cover from '../images/cover.jpg'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {About,Sponsors} from "./MyComponents"
import { Parallax , Background} from 'react-parallax';

const useStyles = makeStyles(theme => ({
    cover : {
        width:'100vw',
        marginTop:'60px'
    } 
}))

function Home() {
    const classes = useStyles();
    return (
        <section>
            <Parallax strength={500}> 
                <div style={{ height: "80vh" }}></div>
                <Background >
                    <img src={cover} className={classes.cover} />
                </Background>
            </Parallax>
            <About/>
            <Sponsors/>
        </section>
    )
}

export default Home
