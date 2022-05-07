import React from "react"
import PropTypes from "prop-types"
import { Container, Title, Description} from "./styles"
import { ReactComponent as Img } from "../../../images/vision.svg"

export default function Vision({children}){
    return(
        <Container>{children}</Container>
    )
}

Vision.propTypes = {
    children: PropTypes.array.isRequired
}

Vision.Title = function VisionTitle(){
    return(
        <Title vision>VISION</Title>
    )
}

Vision.Img = function VisionImg(){
    return(
        <Img/>
    )
}

Vision.Description = function VisionDescription(){
    return(
        <Description vision>Our vision is to develop the stakeholders of entire healthcare system.</Description>
    )
}


