import React from 'react'
import "./style.css"

const TotalMoney = ({someTransitions, allTransitions}) => {

  return (
    <div className='totaly'>
        <div className='moneydesc'>
            <h3>Valor total:</h3>
            <h5>o valor se refere ao saldo</h5>
        </div>
        <div className='moneyvalue'>
            <h3 className='valueText'>$</h3>
            <h3 className='valueText' id='money'>{someTransitions(allTransitions)}</h3>
        </div>
    </div>
  )
}

export default TotalMoney