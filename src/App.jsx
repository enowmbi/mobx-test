import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App(){
    const [count, setCount] = useState(0)
    const [totalIncrementCount, setTotalIncrementCount] = useState(0)
    const [totalDecrementCount, setTotalDecrementCount] = useState(0)

  const handleIncrement =()=>{
     setCount(count + 1)
     setTotalIncrementCount(totalIncrementCount + 1)
  }

  const handleDecrement =()=>{
      setCount(count - 1)
      setTotalDecrementCount(totalDecrementCount + 1)
  }

  return (
    <>
      <Header totalIncrementCount={totalIncrementCount} />
          <div className="card">
              <button onClick={handleIncrement}><h3> Increment(+) </h3></button>
                  <label><h3>{count}</h3></label>
              <button onClick={handleDecrement}><h3> Decrement(-) </h3></button>
          </div>
      <Footer  totalDecrementCount={totalDecrementCount}/>
    </>
  )
}

export default App
