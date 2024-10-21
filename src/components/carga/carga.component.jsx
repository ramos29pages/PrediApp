import { useState } from "react";
import { useRef } from "react";
import "./carga.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faWarning } from "@fortawesome/free-solid-svg-icons";

function CargarArchivo() {
  const fileInputRef = useRef(null);
  let [info, setInfo] = useState("Selecciona un archivo");
  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState(null);
  // const [data, setData] = useState(null);

  
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["csv", "xlsx"];
      const fileExtension = file.name.split(".").pop();
      if (allowedTypes.includes(fileExtension.toLowerCase())) {
        setInfo(file.name);
        setArchivo(file);
        setError(null);
      } else {
        setError("Solo se permiten archivos CSV o XLSX.");
        setArchivo(null);

      }
    }
  };


  return (
    <div className="cont-carga">
      <form>
        <label htmlFor="archivo">Insertar nuevo registro</label>

        <p className={`input-simulate ${archivo ? '' : 'wrong'}`} onClick={handleClick}>
          {info}
          <span>
            {!archivo ? <FontAwesomeIcon icon={faPlus}  /> : <FontAwesomeIcon icon={faCheck} />}
          </span>
        </p>

        {error && <p className="error-carga">
            <FontAwesomeIcon icon={faWarning} />{error}</p>}

        <input
          type="file"
          id="archivo"
          onChange={handleFileChange}
          ref={fileInputRef}
        />

        {archivo && <button href="/inicio" type="button">Continuar </button>}
      </form>
    </div>
  );
}

export default CargarArchivo;
