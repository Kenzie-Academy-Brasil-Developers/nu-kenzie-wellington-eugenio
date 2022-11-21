import React from 'react'
import "./style.css"

const ContCard = ({transition, removetransition}) => {
  return (
    <li className='card' key={transition.title}>
      <div className='cardDesc'>
        <h3 className='cardtittle'>{transition.title}</h3>
        <p className='ctgText'>{transition.category}</p>
      </div>
      <div className='cardValue'>
        <h3 className='moneytext'>R$ {transition.money},00</h3>
        <button className='btnremove' onClick={()=> removetransition(transition.title)}>X</button>
      </div>
      
    </li>
  )
}

export default ContCard