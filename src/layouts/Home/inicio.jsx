import TituloComponent from "../../components/titulo/titulo.component";
import "./inicio.scss";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes de Chart.js necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Inicio = () => {
  // Configuración de los datos para el gráfico
  const data = {
    labels: ["Usuarios registrados", "Pruebas asignadas", "Pruebas realizadas"],
    datasets: [
      {
        label: "Cantidades",
        data: [1000, 300, 150],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }; // Opciones para el gráfico

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Estadísticas de Usuarios y Pruebas",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="cont__inicio">
      <TituloComponent titulo={" 👋 Bienvenido Daniel Ramos"} />
      <div className="cont__metricas">
        <div>
          <span>Pruebas Asignadas</span>
          <span>300</span>
        </div>{" "}
        <div>
          <span>Pruebas Realizadas</span>
          <span>150</span>{" "}
        </div>
        <div>
          <span>Usuarios registrados</span>
          <span>1000</span>{" "}
        </div>
      </div>
      <div className="cont__grafica">
        {/* Componente de gráfico de barras */}
        <Bar className="barrr" data={data} options={options} />
      </div>
    </div>
  );
};

export default Inicio;
