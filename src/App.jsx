import Home from "./Pages/Home"
import Trash from "./Pages/Trash"
import BaseLayout from "./BaseLayout"

import { Route,Routes } from "react-router"
function App() {

  return (
    <div className="App">
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/trash" element={<Trash/>}></Route>
        </Routes>
      </BaseLayout>
    </div>
  )
}

export default App
