import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]= useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "Red"}}>Red</button>
        
          <button onClick={()=> setColor("black")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "Black"}}>Black</button>

          <button onClick={()=> setColor("Orange")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "Orange"}}>Yellow</button>

          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "Green"}}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
