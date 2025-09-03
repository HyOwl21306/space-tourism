import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Crew from "./pages/crew"
import Destination from "./pages/destination"
import Technology from "./pages/technology"

import "./styles/output.css"

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/technology" element={<Technology/>}/>
        </Routes>

      </Router>

    </>
  )
}

export default App
