import React from "react" 
import PropTypes from "prop-types"
import Beat from "../beat"
import {BeatsContainerGrid, BeatsContainer, Title, TitleContainer} from "./styles"

export default function Beats({children}) {
    return (
        <BeatsContainerGrid>{children}</BeatsContainerGrid>
    )
}

Beats.propTypes = {
    children: PropTypes.array.isRequired
}

Beats.Title = function BeatsTitle() {
    return (
        <TitleContainer>
            <Title>OUR BEATS</Title>
        </TitleContainer>
    )
}

Beats.All = function AllBeats({beats}) {
    return (
        <BeatsContainer>
            {beats.map((beat) => {
                return (
                    <Beat key={beat.title} icon={beat.icon} title={beat.title} desc={beat.desc} />
                )
            })}
        </BeatsContainer>
    )
}

Beats.All.propTypes = {
    beats: PropTypes.array.isRequired
}