import React from "react"
import PropTypes from "prop-types"
import {Container, TitleContainer, Title} from "./styles"
import {Beats, Targets, Vision, Mission} from "./components"

export {Vision,Mission,Beats} from "./components"

export default function About({children}){
    console.log(children)
    return(
        <Container>{children}</Container>
    )
}

About.propTypes = {
    children: PropTypes.array.isRequired
}

About.Title = function AboutTitle(){
    return(
        <TitleContainer>
            <Title> About US &nbsp;
                <i className="fas fa-info-circle" aria-hidden="true" ></i>
            </Title>
        </TitleContainer>
    )
}

About.Title.propTypes = {
    children: PropTypes.array.isRequired
}

About.Targets = function AboutTargets({children}){
    return(
        <Targets>{children}</Targets>
    )
}

About.Targets.propTypes = {
    children: PropTypes.array.isRequired
}

About.Beats = function AboutBeats({children}){
    return(
        <Beats> {children} </Beats>
    )
}

About.Beats.propTypes = {
    children: PropTypes.array.isRequired
}

About.Vision = function AboutVision({children}){
    return(
        <Vision> {children} </Vision>
    )
}

About.Vision.propTypes = {
    children: PropTypes.array
}

About.Mission = function AboutMission({children}){
    return(
        <Mission>
            {children}
        </Mission>
    )
}

About.Mission.propTypes = {
    children: PropTypes.array.isRequired
}

