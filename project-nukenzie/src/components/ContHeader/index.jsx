import React from 'react'
import "./style.css"

const ContHead = ({setLogin}) => {
  return (
    <div className='header'>
      <div className='headcont'>
        <div className='logoBlack'>
          <h2 className='Nu'>Nu</h2>
          <h2 className='logoText'>Kenzie</h2>
        </div>
        <button className='btnout' onClick={ ()=> setLogin(false)}>Sair</button>
       </div>
    </div>
  )
}

export default ContHead