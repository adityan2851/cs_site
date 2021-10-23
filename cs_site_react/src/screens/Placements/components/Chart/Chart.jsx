import { Line } from "react-chartjs-2";

import { chartData } from "../../Data";

import "./Chart.css";

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Placement",
    },
    tooltip: {
      callbacks: {
        title: function (context) {
          return "";
        },
        label: function (context) {
          return ` ${context["raw"]} - Placed`;
        },
      },
    },
  },
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
  elements: {
    line: {
      tension: 0.3,
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const data = (canvas) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  // gradient.addColorStop(0, "#34bcd4");
  // gradient.addColorStop(1, "#32edfa33");

  gradient.addColorStop(0.7, "#80ACF7");
  gradient.addColorStop(1, "#3360D3");

  return {
    labels: chartData["years"],
    datasets: [
      {
        label: "Placed",
        data: chartData["placed"],

        fill: true,
        backgroundColor: gradient,
        borderColor: "#000000",
      },
    ],
  };
};

const Chart = () => {
  return (
    <div className="Wrapper">
      <div className="chartWrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
