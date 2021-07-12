import React from 'react'
import cover from '../images/cover.jpg'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {About,Sponsors} from "../components/MyComponents"
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
            <Parallax strength={0}> 
                <div style={{ height: "80vh" }}></div>
                <Background >
                    <img src={cover} alt="cover" className={classes.cover} />
                </Background>
            </Parallax>
            <About/>
            <Sponsors/>
        </section>
    )
}

export default Home
