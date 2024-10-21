import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import "./table.scss"
import NoVistaPreviation from '../preview/noVistaPrevia';
import TituloComponent from './../titulo/titulo.component';
import { useNavigate } from 'react-router-dom';



const VistaPrevia = () => {
    const navigate = useNavigate();
  const { state } = useLocation();

  const saveToDB = () => {
    console.log('saveToDB');
    navigate('/');
}

  console.log(state);
  const data = state?.data || [];
  const VALID_HEADERS = ['identificacion', 'nombre', 'correo','tipo_prueba'];
  const valid_headers = Object.keys(data[0]).every((header)=>{
    return VALID_HEADERS.includes(header);
 }
);
    if(data.length > 0 && valid_headers) {

        console.log(Object.keys(data[0]).every((header)=>{
               return VALID_HEADERS.includes(header);
            }
        ));
        return (
          <div>
            < TituloComponent titulo='Vista previa de datos' ></TituloComponent>
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
                {data.length > 0 ? (
                  data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.nombre}</td>
                      <td>{row.identificacion}</td>
                      <td>{row.correo}</td>
                      <td>{row.tipo_prueba}</td>
                      <td className='actions'>
                        <button title="Editar Registro" className="btn btn--icon btn--danger">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button className="btn btn--icon btn--edit">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5}>No hay datos para mostrar.</td>
                  </tr>
                )}
              </tbody>
            </table>
            {
                data && <div className='cont-save-to-db'>
                     <button className='save-db' onClick={saveToDB}>
                    Guardar
                </button>
                </div>
            }
          </div>
        );
    } else {
        return (
            < NoVistaPreviation />
        );
    }
};

export default VistaPrevia;