import React from 'react'

const CatTrasitions = ({categoriesList, setFilter}) => {
  return (
    <div className='transHeader'>
        <h2>Resumo financeiro</h2>
        <ul>
            <li onClick={()=>setFilter('todos')}>Todos</li>
            {categoriesList.map((category)=>(
                <li key={category.value} onClick={()=>setFilter(category.value)}>{category.title}</li>
            ))}
            
        </ul>
    </div>
  )
}

export default CatTrasitions