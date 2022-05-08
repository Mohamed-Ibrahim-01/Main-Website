import React from "react"
import PropTypes from "prop-types"
import {Container, Title, Description} from "./styles"
import { ReactComponent as Img } from "../../../images/rocket.svg"

export default function Mission({children, ...restProps}){
    return(
        <Container {...restProps} >{children}</Container>
    )
}

Mission.propTypes = {
    children: PropTypes.array.isRequired
}

Mission.Title = function MissionTitle({...restProps}){
    return(
        <Title {...restProps}>MISSION</Title>
    )
}

Mission.Img = function MissionImg({...restProps}){
    return(
        <Img {...restProps}/>
    )
}

Mission.Description = function MissionDescription(){
    return(
        <Description>Our mission is to achieve the 7 beats.</Description>
    )
}


