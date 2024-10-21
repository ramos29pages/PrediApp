// import { BrowserRouter as Router, Rouste, Switch } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faClipboardList, faUsers, faChartBar, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

// Importe sus componentes de página aquí

import Inicio from "./layouts/Home/home.jsx";
import AnadirRegistro from "./layouts/registro/registro.jsx";
import Registros from "./pages/Registros.jsx";
import Accesos from "./pages/Accesos.jsx";
import Resultados from "./pages/Resultados.jsx";
import HeaderComponent from "./components/nav/nav.component";
import MenuComponent from "./components/menu/menu.component";
import VistaPrevia from "./components/table/table.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./PrediApp.scss";


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
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/anadir-registro" element={<AnadirRegistro />} />
            <Route path="/registros" element={<Registros />} />
            <Route path="/vista-previa" element={<VistaPrevia />} />

            <Route path="/accesos" element={<Accesos />} />
            <Route path="/resultados" element={<Resultados />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
  // return (
  //   <Router>
  //     <div className="prediapp">
  //       {/* Sidebar fijo */}
  //       <nav className="prediapp__sidebar">
  //         <div className="sidebar__content">
  //           <div className="sidebar__logo">
  //             <img src="/path-to-your-logo.png" alt="Inúñez Logo" />
  //           </div>
  //           <ul className="sidebar__nav">
  //             <li><a href="/"><FontAwesomeIcon icon={faHome} /></a></li>
  //             <li><a href="/registros"><FontAwesomeIcon icon={faClipboardList} /></a></li>
  //             <li><a href="/accesos"><FontAwesomeIcon icon={faUsers} /></a></li>
  //             <li><a href="/resultados"><FontAwesomeIcon icon={faChartBar} /></a></li>
  //           </ul>
  //         </div>
  //       </nav>

  //       <div className="prediapp__main-container">
  //         {/* Header fijo */}
  //         <header className="prediapp__header">
  //           <h1>PrediApp</h1>
  //           <div className="header__actions">
  //             <button className="btn btn--icon"><FontAwesomeIcon icon={faBell} /></button>
  //             <button className="btn btn--user">
  //               <FontAwesomeIcon icon={faUser} />
  //               Daniel Ramos
  //             </button>
  //           </div>
  //         </header>

  //         {/* Contenido dinámico */}
  //         <main className="prediapp__main">
  //           {/* <Switch>
  //             <Route exact path="/" component={Home} />
  //             <Route path="/registros" component={Registros} />
  //             <Route path="/accesos" component={Accesos} />
  //             <Route path="/resultados" component={Resultados} />
  //           </Switch> */}
  //         </main>
  //       </div>
  //     </div>
  //   </Router>
  // );
};

export default App;
