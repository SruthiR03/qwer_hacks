//barchart.js
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend
);
export default function Graph() {
  const data = {
    labels: ["Professionalism", "Racial Inclusiveness", "LGBTQ+ Friendliness", "Cleanliness", "Attentivness"],
    datasets: [
      {
        axis: "y",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
        data: [1, 1, 3.2, 3.88, 4],
      },
    ],
  };
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        min: 0,
        max: 5,
        stepSize: 1,
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: "right",
      },
    },
  };

  return (
    <div>
      <div>
        <br />
        <h3>
          <strong> Ratings</strong>
        </h3>
        <div>
          <Bar data={data} options={options} style={{ width: "600px"}} />
        </div>
      </div>
    </div>
  );
}
