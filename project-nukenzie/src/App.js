import ContPage from "./pages/contPages";
import HomePage from "./pages/homepage";
import {useState} from "react"
import {categoriesData, transitionsData} from "../src/data/data.js"
import "./style.css"

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
    someTransitions(trasitionsList)
  }

  function removetransition(transitionName){
    const newListTransit = trasitionsList.filter((transition)=> transition.title !== transitionName)
    setTrasitionslist(newListTransit)
    someTransitions(trasitionsList)
  }

  function someTransitions(trasitionsList){
    let some = trasitionsList.reduce((count, trans)=>{
      if(trans.category === 'entrada'){
        count += parseInt(trans.money)
      } else {
        count -= parseInt(trans.money)
      }
      return(count)
    }, 0)
    return some
  }

  return (
    <div className="App">
      {login ? (<ContPage
      categoriesList={categoriesList}
      trasitionsList={transitionFilterList}
      addTransition={addTransition}
      removetransition={removetransition}
      setFilter={setFilter}
      setLogin={setLogin}
      someTransitions={someTransitions}
      allTransitions={trasitionsList}             
      />
      ) : (
      <HomePage setLogin={setLogin} />
      )}     
    </div>
  );
}
     
export default App;
