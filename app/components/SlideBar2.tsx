'use client'
import React, { useState } from 'react'
import { CardsList,Title,Header,Wrap,Text } from './SlideBar2.style'
import Cards from './Cards';
import card from 'antd/es/card';




export default function SlideBar2() {
    const [buttonType,setButtonType] = useState("1");

    const cards = [
  {
    name: "BMW",
    carClass: "normal",
    imgUrl: "/assets/cars/bmw.png"
  },
  {
    name: "MERS",
    carClass: "exlusive",
    imgUrl: "/assets/cars/mers.png"
  },
  {
    name: "Audi",
    carClass: "normal",
    imgUrl: "/assets/cars/audi.png"
  },
  {
    name: "Skoda",
    carClass: "exclusive",
    imgUrl: "/assets/cars/skoda.png",
  },
  {
    name: "Haval",
    carClass: "normal",
    imgUrl: "/assets/cars/haval.png"
  },
  {
    name: "Honda",
    carClass: "exclusive",
    imgUrl: "/assets/cars/honda.png"
  }
    ]
  return (
    
   <><Text>
    Онбординг
   </Text>
   <Wrap>
          <Title>
            <button 
    onClick={() => setButtonType("1")} 
    style={{color: buttonType === "1" ? "#022d44" : "#0369a4" }}
    >Где ездить и парковаться</button>
    <button 
    onClick={() => setButtonType("2")} 
    style={{color: buttonType === "2" ? "#022d44" : "#0369a4" }}
    >Мир штрафов</button>
    <button 
    onClick={() => setButtonType("3")} 
    style={{color: buttonType === "3" ? "#022d44" : "#0369a4" }}
    >Все застрахованно</button>
    <button 
    onClick={() => setButtonType("4")} 
    style={{color: buttonType === "4" ? "#022d44" : "#0369a4" }}
    >На чем вам драйв</button>
          </Title>
          <Header>
          </Header>
          <CardsList>
            {cards.map((cards) => <Cards name={''} cardClass={''} imgUrl={''} key={card.name} {...card}/>)}
          </CardsList>
      </Wrap></>
    
  )
}
