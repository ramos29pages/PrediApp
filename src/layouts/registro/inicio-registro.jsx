// import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import './inicio-registro.scss'
import TituloComponent from "../../components/titulo/titulo.component";

const InicioRegistro = () => {
  return (
    <div className="registro-personas">
      <TituloComponent titulo={"Registro de personas"} input/>
      <div className="cont-table">
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
          {[...Array(19)].map((_, index) => (
            <tr key={index}>
              <td>11111{index + 1}</td>
              <td>John Doe</td>
              <td>jodoe21@curnvirtual.edu.co</td>
              <td>{index % 2 === 0 ? "Tecnológica" : "Profesional"}</td>
              <td className="actions">
                <button title="Editar Registro" className="btn btn--icon btn--danger">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="btn btn--icon btn--edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default InicioRegistro;