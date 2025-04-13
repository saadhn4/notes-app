import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NotesDetails from "./pages/NotesDetails";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/notes/:id" element={<NotesDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
