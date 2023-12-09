import Home from "./Pages/Home"
import Trash from "./Pages/Trash"

import { Route,Routes } from "react-router"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/trash" element={<Trash/>}></Route>
      </Routes>
    </div>
  )
}

export default App
