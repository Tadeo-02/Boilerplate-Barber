// import { useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import MainTurnos from "./components/turnos/mainTurnos.tsx";
import MainProductos from "./components/productos/mainProductos.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/turnos/*" element={<MainTurnos />} />{" "}
            {/* con el '*' indico que tiene rutas anidadas*/}
            <Route path="/productos" element={<MainProductos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
