import React from 'react'
import { CarList,Title,Header,Wrap } from './SlideBar.style'

export default function SlideBar() {
  return (
    <Wrap>   
    <Title>
    <button >Легковые</button>
        /
    <button >Фургоны</button>   
    </Title>
    <Header>
        Нужны 18 лет жизни и водительское удостоверение категории «B»
    </Header>
    <CarList>

    </CarList>
    </Wrap>
    
  )
}
