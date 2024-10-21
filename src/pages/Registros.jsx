const Registros = () => {
  return (
    <div className="container mt-4">
      <h2>Registro de personas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Correo Institucional</th>
            <th>Tipo de Prueba</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderizar las filas de la tabla */}
        </tbody>
      </table>
    </div>
  );
};

export default Registros;
