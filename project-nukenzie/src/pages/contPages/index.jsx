import React from 'react'
import ContForm from '../../components/contForm'
import ContHead from '../../components/ContHeader'
import ContList from '../../components/contList'
import TotalMoney from '../../components/totalMoney'
import CatTrasitions from '../../components/transitionsCat'

const ContPage = ({categoriesList, trasitionsList, addTransition, removetransition ,setFilter, setLogin  }) => {
  return (
    <div className='transitions'>ContPage
        <ContHead setLogin={setLogin}/>
        <ContForm categoriesList={categoriesList} addTransition={addTransition}/>
        <TotalMoney />
        <CatTrasitions categoriesList={categoriesList} setFilter={setFilter} />
        <ContList trasitionsList={trasitionsList} removetransition={removetransition}/>
    </div>
  )
}

export default ContPage