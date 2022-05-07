import {React, TargetsContainer} from "./styles"
import PropTypes from "prop-types"

export {default as Vision} from "./vision"
export {default as Mission} from "./mission"

export function AboutTargets({children}){
    return(
        <TargetsContainer>{children}</TargetsContainer>
    )
}

AboutTargets.propTypes = {
    children: PropTypes.array.isRequired
}