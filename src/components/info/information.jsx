
import TituloComponent from "../../components/titulo/titulo.component";
import './information.scss'
const InformationComponent = () => {
    return (
      <div className="cont__info__component">
        <TituloComponent titulo={"PrediSaber"} />
        <div className="info__component">
            <img src="../../../public/logo.svg" alt="uninunez logo" />
            <p>esta aplicación web hace parte del apartado implementacion de los modelos resultantes del proyecto denominado MODELO DESARROLLADO CON EL DATASET GENERADO POR EL MÉTODO DE SELECCIÓN DE ATRIBUTOS CAERAN PARA EL MODELO DE PREDICCIÓN DE RENDIMIENTO EN LAS PRUEBAS SABER PRO bajo la autoría del Ing. Jairo Acosta Solano. Todos los derechos reservados.</p>

            <h6>Corporacion Universitaria Rafael Nuñez</h6>
            <h6>2024</h6>
        </div>
      </div>
    );
  };
  
  export default InformationComponent;
