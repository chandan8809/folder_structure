import { useState } from 'react'
import Folders from './Folders'
import {fileData} from "./files" 
console.log(fileData)


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Folders fileData={fileData}/>
    </div>
  )
}

export default App
