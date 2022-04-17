import React from "react"
import PropTypes from "prop-types"
import {Container, TitleContainer, Title} from "./styles"
import {Beats, Targets, Vision, Mission} from "./components"

export {Vision,Mission,Beats} from "./components"

export default function About({children, ...restProps}){
    console.log(children)
    return(
        <Container {...restProps} >{children}</Container>
    )
}

About.propTypes = {
    children: PropTypes.array
}

About.Title = function AboutTitle({...restProps}){
    return(
        <TitleContainer {...restProps}>
            <Title> About US &nbsp;
                <i className="fas fa-info-circle" aria-hidden="true" ></i>
            </Title>
        </TitleContainer>
    )
}

About.Title.propTypes = {
    children: PropTypes.array
}

About.Targets = function AboutTargets({children, ...restProps}){
    return(
        <Targets {...restProps}>{children}</Targets>
    )
}

About.Targets.propTypes = {
    children: PropTypes.array
}

About.Beats = function AboutBeats({children, ...restProps}){
    return(
        <Beats {...restProps}>
            {children}
        </Beats>
    )
}

About.Beats.propTypes = {
    children: PropTypes.array
}

About.Vision = function AboutVision({children, ...restProps}){
    return(
        <Vision {...restProps}>
            {children}
        </Vision>
    )
}

About.Vision.propTypes = {
    children: PropTypes.array
}

About.Mission = function AboutMission({children, ...restProps}){
    return(
        <Mission {...restProps}>
            {children}
        </Mission>
    )
}

About.Mission.propTypes = {
    children: PropTypes.array
}

