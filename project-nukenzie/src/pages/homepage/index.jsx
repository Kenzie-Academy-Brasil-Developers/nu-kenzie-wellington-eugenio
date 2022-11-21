import React from 'react'
import "./style.css"
import Illustration from './illustration.svg'

const HomePage = ({setLogin}) => {
  return (
    <div className='homeDiv'>
        <div className='homedesc'>
            <div className='logo'>
                <h2 className='nu'>Nu</h2>
                <h2 className='logotxt'>Kenzie</h2>
            </div>
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button className='acess' onClick={()=>setLogin(true)}>Acessar</button>
        </div>
    </div>
  )
}

export default HomePage