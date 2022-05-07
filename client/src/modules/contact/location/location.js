import React from "react";
import {LocationGrid} from './styles'
import { Map, Marker, ZoomControl } from "pigeon-maps"
const LOCATION = [30.026660123900125,31.21140917006123 ]

export default function Location({children, ...restProps}){
    return (
        <LocationGrid {...restProps}> {children} </LocationGrid>
    )
}

Location.Map = function MapContainer({children, ...restProps}){
  return ( <MyMap {...restProps}/>)
}

function MyMap() {
  return (
    <Map defaultCenter={[...LOCATION]} defaultZoom={15}>
      <Marker width={40} color={'#DB2A32'} anchor={[...LOCATION]} />
      <ZoomControl buttonStyle={{ background: '#000c26', color: '#DB2A32' }} />
    </Map>
  )
}
