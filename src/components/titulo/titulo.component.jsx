import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import "./titulo.component.scss";
export default function TituloComponent({ titulo, input }) {
    return (
      <form>
        <p className="table-title">
          {titulo}

          { input &&
          <a href="/anadir-registro">
            <FontAwesomeIcon icon={faPlus} />
          </a>

        }   
        </p>
        <div className={`input-field ${input ? '' : 'hidden'}`}>
          <label htmlFor="name">
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faSearch} />
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingresa una palabra para buscar"
          />
        </div>
      </form>
    );
  }
  
  TituloComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
    input: PropTypes.bool.isRequired,
  };
