import React from 'react'
import { Wrap } from './Cards.style'
import Image from 'next/image'

interface CardsProps {
  key:string,
  name: string,
  cardClass: string,
  imgUrl : string
}

export default function CardsItems(props: CardsProps) {
  return (
    <Wrap color={props.cardClass === "exclusive" ? "#2a3b57" : "#38647d"}>
      {props.name}
      <Image src={props.imgUrl} alt={props.name} width={300} height={300} style={{maxHeight:300}}/>
    </Wrap>
  )
}