import React from 'react'

const ContHead = ({setLogin}) => {
  return (
    <div>
        <div className='logoBlack'>
            <h2 className='Nu'>Nu</h2>
            <h2 className='logoText'>Kenzie</h2>
        </div>
        <button onClick={ ()=> setLogin(false)}>Sair</button>
    </div>
  )
}

export default ContHead