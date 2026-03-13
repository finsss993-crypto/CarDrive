import React from 'react'
import { Wrap } from './Card.style'
import Image from 'next/image'

interface CardProps {
  key:string,
  name: string,
  carClass: string,
  imgUrl : string
}

export default function CardItems(props: CardProps) {
  return (
    <Wrap color={props.carClass === "exclusive" ? "red" : "purple"}>
      {props.name}
      <Image src={props.imgUrl} alt={props.name} width={150} height={100}/>
    </Wrap>
  )
}