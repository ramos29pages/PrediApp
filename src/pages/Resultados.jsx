const Resultados = () => {
    return (
      <div className="container mt-4">
        <h2>Resultados de las pruebas</h2>
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
  