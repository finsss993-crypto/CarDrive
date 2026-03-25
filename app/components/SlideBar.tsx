'use client'
import React, { useState } from 'react'
import { CarList,Title,Header,Wrap } from './SlideBar.style'
import Card from './Card';

const cars = [
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




export default function SlideBar() {
const [carType,setCarType] = useState("passenger");

  return (
    <Wrap>   
    <Title>
    <button 
    onClick={() => setCarType("passenger")} 
    style={{color: carType === "passenger" ? "#022d44" : "#0369a4" }}
    >Легковые</button>
        /
    <button 
    onClick={() => setCarType("van")}
    style={{color: carType === "passenger" ? "#0369a4" : "#022d44" }}
    >Фургоны</button>   
    </Title>
    {carType === "passenger" ?
    <Header>
        Нужны 18 лет жизни и водительское удостоверение категории «B»
    </Header> :
    <Header>
        Нужны 18 лет жизни и водительское удостоверение категории «B»
    </Header>}







    <CarList>
      {cars.map((car) => <Card key={car.name}{...car}/>)}
    </CarList>
    </Wrap>
    
  )
}
