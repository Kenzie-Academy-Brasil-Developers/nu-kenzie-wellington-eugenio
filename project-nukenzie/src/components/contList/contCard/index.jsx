import React from 'react'

const ContCard = ({transition, removetransition}) => {
  return (
    <li key={transition.title}>
      <div>
        <h3>{transition.title}</h3>
        <p>{transition.category}</p>
      </div>
      <div>
        <h3>{transition.money}</h3>
        <button onClick={()=> removetransition(transition.title)}>remover</button>
      </div>
      
    </li>
  )
}

export default ContCard