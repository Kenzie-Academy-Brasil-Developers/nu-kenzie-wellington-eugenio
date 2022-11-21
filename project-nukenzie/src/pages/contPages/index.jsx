import React from 'react'
import ContForm from '../../components/contForm'
import ContHead from '../../components/ContHeader'
import ContList from '../../components/contList'
import TotalMoney from '../../components/totalMoney'
import CatTrasitions from '../../components/transitionsCat'
import "./style.css"


const ContPage = ({categoriesList, trasitionsList, addTransition, removetransition ,setFilter, setLogin, someTransitions, allTransitions}) => {
  return (
    <div className='transPage'>
        <ContHead setLogin={setLogin}/>
        <div className='transContainer'>
          <div className='trasActions'>
          <ContForm categoriesList={categoriesList} addTransition={addTransition}/>
          <TotalMoney someTransitions={someTransitions} allTransitions={allTransitions}/>
          </div>
          <div className='transations'>
          <CatTrasitions categoriesList={categoriesList} setFilter={setFilter} />
          <ContList trasitionsList={trasitionsList} removetransition={removetransition}/>
        </div>
        </div>
    </div>
  )
}

export default ContPage