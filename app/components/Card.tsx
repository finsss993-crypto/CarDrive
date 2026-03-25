import React from 'react'
import { Wrap } from './Card.style'
import Image from 'next/image'

interface CardProps {
  key:string,
  name: string,
  carClass: string,
  imgUrl : string,
}

export default function CardItems(props: CardProps) {
  return (
    <Wrap color={props.carClass === "exclusive" ? "#2a3b57" : "#38647d"}>
      {props.name}
      <Image src={props.imgUrl} alt={props.name} width={300} height={300} style={{maxHeight:300}}/>
    </Wrap>
  )
}