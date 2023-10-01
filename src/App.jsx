import Display from "./components/Display"
import Numpad from "./components/Numpad"
import { useState } from "react"

function App() {
const [text, setText] = useState('132+3')

  return (
    <>
      <Display text ={text}/>
      <Numpad setText={setText} text={text}/>
    </>
  )
}

export default App
