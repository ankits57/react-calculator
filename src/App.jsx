import Display from "./components/Display"
import Numpad from "./components/Numpad"
import { useState } from "react"

function App() {
const [text, setText] = useState('')

  return (
    <>
    <div className="lg:grid grid-cols-2">
      <Display text ={text} />
      <Numpad setText={setText} text={text}/>
    </div>
      
    </>
  )
}

export default App
