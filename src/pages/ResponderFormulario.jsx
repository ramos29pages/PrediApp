import TituloComponent from "../components/titulo/titulo.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import SABERPRO_QUESTIONS from "../config/saberpro/preguntasSaberPro";


const ResponderFormulario = () => {
  const { state } = useLocation();
  const [position, setPosition] = useState(0);
  const [posicion_pregunta, setPositionPregunta] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [respuestas, setRespuestas] = useState([]);

  const handleSiguientePregunta = () => {
    if (!selectedAnswer) {
     Swal.fire({
      icon: "warning",
      timer: 1500,
      text: "Debes seleccionar una respuesta.",
      showConfirmButton: false
     });
      return;
    }

    const nuevasRespuestas = [
      ...respuestas,
      {
        pregunta: DATA_QUESTIONS[position].pregunta,
        respuesta: selectedAnswer,
      },
    ];

    setRespuestas(nuevasRespuestas);
    setSelectedAnswer(null);

    console.table(nuevasRespuestas);

    if (position + 1 < DATA_QUESTIONS.length) {
      // Enviar las respuestas al servidor
      setPosition(position + 1);
      setPositionPregunta(posicion_pregunta + 1);
    } else {
      setPosition(0);
      console.table(nuevasRespuestas);
    }
  };

  const DATA_QUESTIONS = SABERPRO_QUESTIONS;

  return (
    <>
      <TituloComponent titulo={`Formulario prueba ${state?.type}`} />
      <section className="form_section">
        <div className="form_progress_bar">75%</div>
        <div className="rform_question">
          <h4>¿{DATA_QUESTIONS[position].pregunta}?</h4>
          {DATA_QUESTIONS[position].respuestas.map((respuesta, index) => {
            return (
              <label className="respuestaopcion" key={index}>
                <input
                  type="radio"
                  value={respuesta}
                  checked={selectedAnswer === respuesta}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {respuesta}
              </label>
            );
          })}
          <h6>{ `${posicion_pregunta} de ${DATA_QUESTIONS.length}` }</h6>
          <button onClick={handleSiguientePregunta}>Siguiente</button>
        </div>
      </section>
    </>
  );
};

export default ResponderFormulario;
