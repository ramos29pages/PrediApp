import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import {
  faBell,
  // faTableCellsLarge,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import "./nav.scss";

const HeaderComponent = ({ toggleMenu }) => {

  const nombre = 'Daniel Ramos';
  const rol = 'Administrador'

  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Éxito!',
      text: 'Operación completada correctamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  };

  const mostrarConfirmacion = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado!',
          'El archivo ha sido borrado.',
          'success'
        )
      }
    });
  };

    // let userIcon = "https://avatar.iran.liara.run/public/boy";
  return (
    <nav>
      {/* <div className="show__burguer">
      <FontAwesomeIcon icon={faTableCellsLarge} onClick={toggleMenu}/>
      </div> */}
      <div className="cont__logo"></div>
      <div className="user">
        <span>
        <FontAwesomeIcon icon={faBell} onClick={mostrarConfirmacion}/>
        </span>
        <span>
        <FontAwesomeIcon icon={faUserGear} onClick={mostrarAlerta}/>
        
        </span>
        <div className="infoUser">
          <p>{nombre}</p>
          <p>{rol}</p>
        </div>
        <div className="user-icon">
            <img src={ "https://avatar.iran.liara.run/public/boy"} alt="" />
        </div>
      </div>

      <section className="editing">
        <div className="edit">
        </div>
      </section>
    </nav>
  );
};

HeaderComponent.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default HeaderComponent;
