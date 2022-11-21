import React, {useState} from 'react'
import "./style.css"

const ContForm = ({categoriesList, addTransition}) => {
  const [formdata, setFormdata] = useState({
    title: '',
    value: '',
    category: categoriesList[0].value,
  })
  
  function submit(evt){
    evt.preventDefault()
    addTransition(formdata)
    setFormdata({
      title: '',
      money: '',
      category: categoriesList[0].value,
    })
  }
  
  return (
    <form className='formTransition' onSubmit={submit}>
      
      <div className='formdesc'>
        <label className='formtext' htmlFor="descryption">Descrição</label>
        <input type="text" name="descryption" value={formdata.title} onChange={(evt) => setFormdata({ ...formdata, title: evt.target.value})} placeholder="Digite aqui sua descrição" />
        <p className='exemple'>Ex: Compra de roupas</p>
      </div>

      <div className='formEntries'>
        <div className='formValue'>
          <label htmlFor="money">Valor</label>
          <div className='moneyEntry'>
            <input type="text" name='money' value={formdata.money} onChange={(evt) => setFormdata({ ...formdata, money: evt.target.value})} placeholder="1"/>
            <p>R$</p>
          </div>
        </div>

        <div className='formcateg'>
          <label htmlFor="category">Tipo de valor</label>
          <select defaultValue={formdata.category} onChange={(evt) => setFormdata({ ...formdata, category: evt.target.value})}>
            {categoriesList.map(category => (
              <option className='options' key={category.value} value={category.value}>{category.title}</option>
            ))}
          </select>
        </div>
      </div>
      <button className='btnform' type="submit">Inserir valor</button>
      
    </form>
  )
}

export default ContForm