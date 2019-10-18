import React from "react"
import { Cylinder, Illustration } from 'react-zdog';

export const TrompoAlPastor = (props) => {

  const discos = props.discs ? props.discs.map((d,i) => {
    return <Cylinder 
      key={i} 
      diameter={d.diameter} 
      translate={{z:3*i}} 
      length={3} 
      color={d.color || "#7c2c22"} 
      stroke={false} 
      backface={d.backface} />
  }) : '';

  return (
      <Illustration className={"portal"} zoom={props.zoom} rotate={props.rotation}>
        {discos}
      </Illustration>
  )
}