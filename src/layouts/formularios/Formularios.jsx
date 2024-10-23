import TituloComponent from "../../components/titulo/titulo.component";
import { useNavigate } from 'react-router-dom';
import './formularios.scss'

const Formularios = () => {

  const navigate = useNavigate();

  const data = [
    {
      id: '12edr334',
      nombre: "Prueba TyT",
      asignadoPor: "Jairo Acosta",
      asignadoA: "dramosm21",
      tipoPrueba: "Tecnologica",
      estado: true,
    },
    {
      id: "2d3547ggo",
      nombre: "Prueba Saber Pro",
      asignadoPor: "Jairo Acosta",
      asignadoA: "dramosm21",
      tipoPrueba: "Profesional",
      estado: false,
    },
  ];

  const completarFormulario = (id, type) =>{
    console.log(id);
    navigate('/completar-formulario', { state: { formId: id, type }});
  }


  return (
    <>
      <TituloComponent titulo="Formularios" />
      <div className="cont-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Asignado por</th>
              <th>Tipo de prueba</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((form) => (
              <tr key={ form.id}>
                <td>{form.nombre}</td>
                <td>{form.asignadoPor}</td>
                <td>{form.tipoPrueba}</td>
                <td>
                  <span className={form.estado ? "form__status__complete" : "form__status__pending"}>{form.estado ? "COMPLETADA" : "PENDIENTE"}</span>
                </td>
                <td className="actions">
                  {!form.estado && <button className="form__button__complete" onClick={ ()=>{completarFormulario(form.id, form.tipoPrueba)} }>Completar</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Formularios;
