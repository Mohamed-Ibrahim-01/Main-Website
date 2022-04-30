import React from "react" 
import PropTypes from "prop-types"
import {
    ContainerGrid,
    IconContainer,
    IconButton,
    InfoContainer,
    TitleContainer,
    BeatTitle,
    DescContainer,
    BeatDescription,
} from "./styles"

export default function Beat({children}) {
    return (
        <ContainerGrid>{children}</ContainerGrid>
    )
}

Beat.propTypes = {
    children: PropTypes.array.isRequired
}

Beat.Icon = function BeatIcon({icon}) {
    const Icon = icon
    return (
        <IconContainer>
            <IconButton>
                <Icon style={{fontSize: "2.65rem", color: "#2276e7" }}></Icon>
            </IconButton>
        </IconContainer>
    )
}

Beat.Icon.propTypes = {
    icon: PropTypes.node.isRequired
}

Beat.Info = function BeatInfo({title, desc}) {
    return (
        <InfoContainer>
            <TitleContainer >
                <BeatTitle>{title}</BeatTitle>
            </TitleContainer>
            <DescContainer >
                <BeatDescription>{desc}</BeatDescription>
            </DescContainer>
        </InfoContainer>
    )
}

Beat.Info.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.node.isRequired,
}
