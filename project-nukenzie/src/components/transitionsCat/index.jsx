import React from 'react'
import "./style.css"

const CatTrasitions = ({categoriesList, setFilter}) => {
  return (
    <div className='transHeader'>
        <h2>Resumo financeiro</h2>
        <ul className='listCAt'>
            <li className='catCard' onClick={()=>setFilter('todos')}>Todos</li>
            {categoriesList.map((category)=>(
                <li className='catCard' key={category.value} onClick={()=>setFilter(category.value)}>{category.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default CatTrasitions