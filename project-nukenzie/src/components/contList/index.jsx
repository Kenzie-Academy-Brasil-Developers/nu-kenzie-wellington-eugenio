import React from 'react'
import ContCard from './contCard'

const ContList = ({trasitionsList, removetransition }) => {
  return (
    <ul className='cardList'>list
      {trasitionsList.map((transition, index)=>(
        <ContCard key={index} transition={transition} removetransition={removetransition}/>
      ))}
    </ul>
  )
}

export default ContList