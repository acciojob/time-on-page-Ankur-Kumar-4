
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  setInterval(()=>{
    setCounter(counter +1)
  },1000)
  return (
    <div>
      <p>

         You've been on this page for {counter} seconds
      </p>
    </div>
  )
}

export default App
