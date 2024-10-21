import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faUsers, faChartBar, faBell, faUser, faSearch, faPlus, faTrash, faEdit, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import './home.scss';

const Home = () => {
  return (
    <div className="prediapp">
      <div className="prediapp__layout">
        {/* Sidebar */}
        <nav className="prediapp__sidebar">
          <div className="sidebar__content">
            <div className="sidebar__logo">
              <img src="/path-to-your-logo.png" alt="Inúñez Logo" />
            </div>
            <ul className="sidebar__nav">
              <li><a href="/home" className="active"><FontAwesomeIcon icon={faHome} /></a></li>
              <li><a href="/accesos"><FontAwesomeIcon icon={faClipboardList} /></a></li>
              <li><a href="/registros"><FontAwesomeIcon icon={faUsers} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faChartBar} /></a></li>
              <li><a href="#">
                {/* <FontAwesomeIcon icon={faChartBar} /> */}
                <FontAwesomeIcon icon={faUserSecret} />
                </a></li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className="prediapp__main">
          <header className="main__header">
            <h1>Registro de personas</h1>
            <div className="header__actions">
              <button className="btn btn--icon"><FontAwesomeIcon icon={faBell} /></button>
              <button className="btn btn--user">
                <FontAwesomeIcon icon={faUser} />
                Daniel Ramos
              </button>
            </div>
          </header>

          <div className="main__actions">
            <div className="search-bar">
              <input type="text" placeholder="Ingresa una palabra para buscar" />
              <button className="btn btn--icon"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <button className="btn btn--primary"><FontAwesomeIcon icon={faPlus} /> Agregar</button>
          </div>

          <div className="main__table">
            <table>
              <thead>
                <tr>
                  <th>Identificación</th>
                  <th>Nombre</th>
                  <th>Correo Institucional</th>
                  <th>Tipo de prueba</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(9)].map((_, index) => (
                  <tr key={index}>
                    <td>11111{index + 1}</td>
                    <td>John Doe</td>
                    <td>jodoe21@curnvirtual.edu.co</td>
                    <td>{index % 2 === 0 ? 'Tecnológica' : 'Profesional'}</td>
                    <td>
                      <button className="btn btn--icon btn--danger"><FontAwesomeIcon icon={faTrash} /></button>
                      <button className="btn btn--icon btn--edit"><FontAwesomeIcon icon={faEdit} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;