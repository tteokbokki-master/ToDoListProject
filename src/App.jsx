import Home from "./Pages/Home"
import Trash from "./Pages/Trash"

import { Route,Routes } from "react-router"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/trash" element={<Trash/>}></Route>
    </Routes>
  )
}

export default App
