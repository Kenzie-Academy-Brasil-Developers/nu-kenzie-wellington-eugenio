import React from 'react'
import ContCard from './contCard'
import "./style.css"

const ContList = ({trasitionsList, removetransition }) => {
  return (
    <ul className='cardList'>
      {trasitionsList.map((transition, index)=>(
        <ContCard key={index} transition={transition} removetransition={removetransition}/>
      ))}
    </ul>
  )
}

export default ContList