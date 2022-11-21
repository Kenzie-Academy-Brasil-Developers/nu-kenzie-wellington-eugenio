import ContPage from "./pages/contPages";
import HomePage from "./pages/homepage";
import {useState} from "react"
import {categoriesData, transitionsData} from "../src/data/data.js"

function App() {
  const [login, setLogin] = useState(false)
  const [categoriesList, setCategoriesList] = useState(categoriesData)
  const [trasitionsList, setTrasitionslist] = useState(transitionsData)
  const [filter, setFilter]= useState('todos')
  
  const transitionFilterList = trasitionsList.filter((transition)=>(
    filter === 'todos' ? true : transition.category === filter
  ))
  
  function addTransition(transitionsData){
    setTrasitionslist([...trasitionsList, transitionsData])
  }

  function removetransition(transitionName){
    const newListTransit = trasitionsList.filter((transition)=> transition.title !== transitionName)
    setTrasitionslist(newListTransit)
  }
  return (
    <div className="App">
      <HomePage setLogin={setLogin} />
      <ContPage
      categoriesList={categoriesList}
      trasitionsList={transitionFilterList}
      addTransition={addTransition}
      removetransition={removetransition}
      setFilter={setFilter}
      setLogin={setLogin}
      />
    </div>
  );
}

export default App;
