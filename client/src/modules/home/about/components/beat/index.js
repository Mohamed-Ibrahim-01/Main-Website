import React from "react"
import PropTypes from "prop-types"
import Beat from "./beat"

export default function BeatContainer(props){
    const {icon,title,desc} = props
    return(
        <Beat>
            <Beat.Icon icon={icon}/>
            <Beat.Info title={title} desc={desc}/>
        </Beat>
    )
}

BeatContainer.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}
