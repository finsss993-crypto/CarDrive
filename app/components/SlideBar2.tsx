'use client'
import React, { useState } from 'react'
import { CardsList,Title,Header,Wrap,Text } from './SlideBar2.style'
import Cards from './Cards';
import card from 'antd/es/card';
import { arr0, arr1, arr2, arr3 } from "./data/data"



export default function SlideBar2() {
    const [buttonType,setButtonType] = useState(0);

    const infoArrays = [arr0, arr1, arr2, arr3]
  return (
    
   <><Text>
    Онбординг
   </Text>
   <Wrap>
          <Title>
            <button 
    onClick={() => setButtonType(0)} 
    style={{color: buttonType === 0 ? "#022d44" : "#0369a4" }}
    >Где ездить и парковаться</button>
    <button 
    onClick={() => setButtonType(1)} 
    style={{color: buttonType === 1 ? "#022d44" : "#0369a4" }}
    >Мир штрафов</button>
    <button 
    onClick={() => setButtonType(2)} 
    style={{color: buttonType === 2 ? "#022d44" : "#0369a4" }}
    >Все застрахованно</button>
    <button 
    onClick={() => setButtonType(3)} 
    style={{color: buttonType === 3 ? "#022d44" : "#0369a4" }}
    >На чем вам драйв</button>
          </Title>
          <Header>
          </Header>
          <CardsList>
            {infoArrays[buttonType].map((card) => <Cards key={card.text} {...card}/>)}
          </CardsList>
      </Wrap></>
    
  )
}
