import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Message from "./Component/Message";
import SingleMessage from "./Component/SingleMessage";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/message" element={<Message />} />
        <Route path="/message/:q" element={<SingleMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
