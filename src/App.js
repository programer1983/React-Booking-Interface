import React from "react"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./hotel/Hotel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotels/:id" element={<Hotel/>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;