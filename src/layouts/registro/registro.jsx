import CargarArchivo from "../../components/carga/carga.component";
import TituloComponent from "../../components/titulo/titulo.component";

export default function AnadirRegistro() {
  return (
    <>
      <TituloComponent titulo={"Registro de Personas"} />
      <CargarArchivo/>
    </>
  );
}
