
import './App.css'
import Pokedeck from './Pokedeck/pokedeck'
import { Routes,Route } from 'react-router-dom'
import Pokemondetails from './Pokemdetails/Pokemondeatils'

function App() {


  return (
  
      <>
      <Routes>
        <Route path="" element={<Pokedeck/>}/>
        <Route  path="/pokemon/:id" element={<Pokemondetails/>}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
      
      </Routes>
     
    
      </>
  )
}

export default App
