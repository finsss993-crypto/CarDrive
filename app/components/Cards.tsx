import React from 'react'
import { Wrap } from './Cards.style'
import Image from 'next/image'

interface CardsProps {
  key:string,
  text: string,
  imgUrl : string
}

export default function CardsItems(props: CardsProps) {
  return (
    <Wrap color="#2a3b57">
      {props.text}
      <Image src={props.imgUrl} alt={props.text} width={300} height={300} style={{maxHeight:300}}/>
    </Wrap>
  )
}