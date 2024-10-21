import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClipboardList,
  faUsers,
  faChartBar,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

import "./menu.scss";

const MenuComponent = () => {
  return (
    <>
      <main className="sidebar-menu">
        <div className="sidebar__content">
          <ul className="sidebar__nav">
            <li>
              <a href="/" className="active">
                <FontAwesomeIcon icon={faHome} />
              </a>
              <p>Inicio</p>
            </li>
            <li>
              <a href="/registros">
                <FontAwesomeIcon icon={faUsers} />
              </a>
              <p>Registros</p>
            </li>
            <li>
              <a href="/accesos">
                <FontAwesomeIcon icon={faClipboardList} />
              </a>
              <p>Accesos</p>
            </li>
            <li>
              <a href="/resultados">
                <FontAwesomeIcon icon={faChartBar} />
              </a>
              <p>Resultados</p>
            </li>
            <li>
              <a href="/admin">
                <FontAwesomeIcon icon={faUserSecret} />
              </a>
              <p>Admin</p>
            </li>
          </ul>
        </div>
      </main>
      ;
    </>
  );
};

export default MenuComponent;
