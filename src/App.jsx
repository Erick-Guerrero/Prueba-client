import React from "react"
import Home from "./Components/Home/Home"
import ComoJugar from "./Components/ComoJugar/ComoJugar"
import { Route, Routes } from "react-router-dom";
import EresGanador from "./Components/EresGanador/EresGanador";
import Sorteos from "./Components/Sorteos/Sorteos";

function App() {

  return (
    <>

<Routes>

        <Route exact path="/" element={<Home />}/>
        <Route exact path="/comojugar" element={<ComoJugar />}/>
        <Route exact path="/eresganador" element={<EresGanador/>}/>
        <Route exact path="/sorteos" element={<Sorteos/>}/>
</Routes>

    </>
  )
}

export default App
