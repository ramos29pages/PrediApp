import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faHome,
  faClipboardList,
  faUsers,
  faChartBar,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./menu.scss";

const MenuComponent = () => {
  const currentPath = window.location.pathname; // Get the current URL path
  useEffect(() => {
    console.log('Ruta inicial:', window.location.pathname);
  }, []);

  return (
    <>
      <main className="sidebar-menu">
        <div className="sidebar__content">
          <ul className="sidebar__nav">
            <li href="/" className={currentPath === "/" ? "active" : ""}>
              <a  href="/" >
                <FontAwesomeIcon icon={faHome} />
              </a>
              <p href="/">Inicio</p>
            </li>
            <li className={currentPath.includes("registro") ? "active" : ""}>
              <a href="/registros" >
                <FontAwesomeIcon icon={faUsers} />
              </a>
              <p>Registros</p>
            </li>
            <li className={currentPath.includes("formulario") ? "active" : ""}>
              <a href="/formularios">
                <FontAwesomeIcon icon={faClipboardList} />
              </a>
              <p>Formularios</p>
            </li>
            <li className={currentPath.includes("resultados") ? "active" : ""}>
              <a href="/resultados" >
                <FontAwesomeIcon icon={faChartBar} />
              </a>
              <p>Resultados</p>
            </li>
            <li  className={currentPath.includes("information") ? "active" : ""}>
              <a href="/information">
                <FontAwesomeIcon icon={faInfoCircle} />
              </a>
              <p>Predisaber</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default MenuComponent;
