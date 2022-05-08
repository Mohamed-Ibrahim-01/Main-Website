import React from "react"
import PropTypes from "prop-types"
import {LocationGrid} from "./styles"
import { Map, Marker, ZoomControl } from "pigeon-maps"
const LOCATION = [30.026660123900125,31.21140917006123 ]

export default function Location({children}){
    return (
        <LocationGrid> {children} </LocationGrid>
    )
}

Location.propTypes = {
    children: PropTypes.object.isRequired
}

Location.Map = function MapContainer(){
    return ( <MyMap/>)
}

function MyMap() {
    return (
        <Map defaultCenter={[...LOCATION]} defaultZoom={15}>
            <Marker width={40} color={"#DB2A32"} anchor={[...LOCATION]} />
            <ZoomControl buttonStyle={{ background: "#000c26", color: "#DB2A32" }} />
        </Map>
    )
}
