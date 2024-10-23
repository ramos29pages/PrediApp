import TituloComponent from "../components/titulo/titulo.component";

const Resultados = () => {
    return (
      <div className="container mt-4">
        <TituloComponent titulo="Visualizacion Resultados"/>
        <p>Aquí puedes visualizar los resultados de las pruebas registradas en el sistema.</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Resultado</th>
              <th>Fecha de la prueba</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderizar los resultados aquí */}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Resultados;
  