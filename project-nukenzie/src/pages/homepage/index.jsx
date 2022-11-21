import React from 'react'
import logo from './logo.svg'
import "./style.css"

const HomePage = ({setLogin}) => {
  return (
    <div className='homeDiv'>
      <div className='homecontainer'>
        <div className='homedesc'>
            <div className='logo'>
                <h2 className='nu'>Nu</h2>
                <h2 className='logotxt'>Kenzie</h2>
            </div>
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button className='acess' onClick={()=>setLogin(true)}>Acessar</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
}

export default HomePage