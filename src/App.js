
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";



import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";


import FullLayout from "./components/FullLayout";
import Experiences from "./components/Experiences";
import Certificats from "./components/Certificats";
import Projects from "./components/Projects";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<FullLayout />} >
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="certificats" element={<Certificats />} />
          <Route path="projets" element={<Projects />} />

        </Route>
      </Routes>
    </>
  );

};

export default App;
