
import "./noVistaPrevia.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from "@fortawesome/free-solid-svg-icons";

export default function NoVistaPreviation(){

    return (

        <section>
            <h2><FontAwesomeIcon icon={faWarning} /></h2>
            <p>Parece que el archivo que ha subido a pesar de ser valido, no contiene las columnas necesarias para usar en este aplicativo. Porfavor reviselo e intente nuevamente.</p>
        </section>

    );
}