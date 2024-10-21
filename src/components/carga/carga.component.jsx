import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./carga.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faWarning } from "@fortawesome/free-solid-svg-icons";
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

function CargarArchivo() {
  const fileInputRef = useRef(null);
  let [info, setInfo] = useState("Selecciona un archivo");
  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["csv", "xlsx"];
      const fileExtension = file.name.split(".").pop();
      if (allowedTypes.includes(fileExtension.toLowerCase())) {
        console.info(fileExtension.toLowerCase());
        setInfo(file.name);
        setArchivo(file);
        setError(null);
      } else {
        setError("Solo se permiten archivos CSV o XLSX.");
        setArchivo(null);

      }
    }
  };

  const convertXLSX = (file) =>{
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      if(jsonData){
        console.log(jsonData); 
        navigate('/vista-previa',{ state: { data : jsonData } });
      }
    };

    reader.readAsArrayBuffer(file);
  }

  const convertCSV = (file) =>{
    console.log('tipe: ',typeof file, file);
    Papa.parse(file, {
      header: true,
      complete: (results) => {

        if(results){
          console.log(results.data);
          navigate('/vista-previa', { state: { data : results.data} })
        }
      }
    });
  }

 const handleUploadFile = () => {
    if (archivo) {
      const allowedTypes = ["csv", "xlsx"];
      const fileExtension = archivo.name.split(".").pop();
      if (allowedTypes.includes(fileExtension.toLowerCase())) {
        if(fileExtension.toLowerCase() === 'csv') {
          convertCSV(archivo);
        }else if(fileExtension.toLowerCase() === 'xlsx'){
          convertXLSX(archivo);
        }
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

        {archivo && <button href="/inicio" type="button" onClick={handleUploadFile}>Continuar </button>}
      </form>
    </div>
  );
}

export default CargarArchivo;
