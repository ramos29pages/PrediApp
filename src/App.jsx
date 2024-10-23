// import { BrowserRouter as Router, Rouste, Switch } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faClipboardList, faUsers, faChartBar, faBell, faUser } from '@fortawesome/free-solid-svg-icons';


import InicioRegistro from "./layouts/registro/inicio-registro.jsx";
import AnadirRegistro from "./layouts/registro/añadir-registro.jsx";
import Formularios from "./layouts/formularios/Formularios.jsx";
import Resultados from "./pages/Resultados.jsx";
import HeaderComponent from "./components/nav/nav.component";
import MenuComponent from "./components/menu/menu.component";
import VistaPrevia from "./components/table/table.component";
import ResponderFormulario from "./pages/ResponderFormulario.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./PrediApp.scss";
import Inicio from "./layouts/Home/inicio.jsx";
import InformationComponent from "./components/info/information.jsx";


const App = () => {

  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Router>
      <div className={`principal-container ${!menuVisible ? 'full-width' : ''}`}>
        <div className="headere">
          <HeaderComponent toggleMenu={toggleMenu}/>
        </div>
        {menuVisible && (
          <div className="mene">
            <MenuComponent />
          </div>
        )}
        <div className="contenide">
          <Routes>
            <Route exact path="/" element={ <Inicio/>} />
            <Route exact path="/anadir-registro" element={<AnadirRegistro />} />
            <Route path="/vista-previa" element={<VistaPrevia />} />
            <Route path="/registros" element={<InicioRegistro />} />

            <Route path="/formularios" element={<Formularios />} />
            <Route path="/completar-formulario" element={<ResponderFormulario />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/information" element={<InformationComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );

};

export default App;
