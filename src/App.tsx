// import { useState } from "react";
import "./App.css";
import Login from "./components/login/login";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import MainTurnos from "./components/turnos/mainTurnos.tsx";
import MainSucursal from "./components/turnos/mainSucursal.tsx";
import MainBarberos from "./components/turnos/mainBarberos.tsx";
import MainHorarios from "./components/turnos/mainHorarios.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<MainTurnos />} />
            <Route path="/turnos/mainTurnos" element={<MainTurnos />} />{" "}
            <Route path="/login" element={<Login />} />
            <Route path="/mainSucursal/*" element={<MainSucursal />} />
            <Route path="/mainBarberos" element={<MainBarberos />}></Route>
            <Route path="/mainHorarios" element={<MainHorarios />}></Route>
            {/* con el '*' indico que tiene rutas anidadas*/}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
