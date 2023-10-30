import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Card from './components/Card'



function App() {
  const [cards, setCards] = useState(null);
  const [score, setScore] = useState(0);
  const [moves, SetMoves] = useState(0);
  const [disabled, setDisable] = useState(false);
  const [secondSelected, setSecondSelected] = useState(null);
  const pics =[
    {

    }
  ]
  


  return (
    <>
      <div>
        <h1>Muistipeli</h1>
        
      </div>
      
      <div className="card">
        
      </div>
      <div>
        <Card/>
      </div>
      
    </>
  )
}

export default App
