import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import WordCloud from "react-d3-cloud";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie, Scatter } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  faHome,
  faChartSimple,
  faChartPie,
  faArrowUpRightDots,
  faCloud,
  faPlusMinus,
  faPlus,
  faMinus,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Charts.css";

function Charts(props) {
  let chartTypes = [
    { id: 1, name: "Bar Chart", icon: faChartSimple },
    { id: 2, name: "Pie Chart", icon: faChartPie },
    { id: 3, name: "Dot Plot", icon: faArrowUpRightDots },
    { id: 4, name: "Word Cloud", icon: faCloud },
  ];

  let chartInfoTypes = [
    [
      { id: 1, name: "General", icon: faPlusMinus },
      { id: 2, name: "Positive", icon: faPlus },
      { id: 3, name: "Negative", icon: faMinus },
      { id: 4, name: "Neutral", icon: faGauge },
    ],
    [
      { id: 1, name: "General", icon: faPlusMinus },
      { id: 2, name: "Positive", icon: faPlus },
      { id: 3, name: "Negative", icon: faMinus },
      { id: 4, name: "Neutral", icon: faGauge },
    ],
    [
      { id: 1, name: "General", icon: faPlusMinus },
      { id: 2, name: "Positive", icon: faPlus },
      { id: 3, name: "Negative", icon: faMinus },
      { id: 4, name: "Neutral", icon: faGauge },
    ],
    [
      { id: 1, name: "General", icon: faPlusMinus },
      { id: 2, name: "Positive", icon: faPlus },
      { id: 3, name: "Negative", icon: faMinus },
      { id: 4, name: "Neutral", icon: faGauge },
      { id: 5, name: "Adjectives", icon: faGauge },
    ],
  ];

  const navigate = useNavigate();
  const [currentChartID, setCurrentChartID] = useState(chartTypes[0].id);
  const [currentInfoTypeID, setCurrentInfoTypeID] = useState(
    chartInfoTypes[currentChartID - 1][0].id
  );

  const words = [
    { text: "Hey", value: 1000 },
    { text: "lol", value: 200 },
    { text: "first impression", value: 800 },
    { text: "very cool", value: 1000000 },
    { text: "duck", value: 10 },
  ];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

  const scatterChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const scatterChartData = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from({ length: 100 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#fac26d",
      },
    ],
  };

  const goHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const selectChart = (chartOB) => {
    setCurrentChartID(parseInt(chartOB.id));
  };

  const downloadChart = async () => {
    const canvas = await html2canvas(document.querySelector("#charts"));
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "chart-download.png", "image/png");
  };

  return (
    <div className="App">
      <div className="center-horizontal-container">
        <button className="primary-button mt-3" onClick={goHome}>
          <FontAwesomeIcon icon={faHome} />
        </button>
        <div className="chart-btn-container">
          {chartTypes.map((chartOB, i) => {
            return (
              <div
                key={i}
                id={chartOB.id}
                onClick={() => selectChart(chartOB)}
                className={
                  "chart-btn" +
                  " " +
                  (currentChartID === chartOB.id ? "active" : "")
                }
              >
                <FontAwesomeIcon icon={chartOB.icon} />
                <div className="chart-name">{chartOB.name}</div>
              </div>
            );
          })}
        </div>

        <div className="chart-btn-container mt-0">
          {chartInfoTypes[currentChartID - 1].map((infoTypeOB, i) => {
            return (
              <div
                key={i}
                id={infoTypeOB.id}
                onClick=""
                className={
                  "chart-btn" +
                  " " +
                  (currentInfoTypeID === infoTypeOB.id ? "active" : "")
                }
              >
                <FontAwesomeIcon icon={infoTypeOB.icon} />
                <div className="chart-name">{infoTypeOB.name}</div>
              </div>
            );
          })}
        </div>

        <div className="charts-container ">
          <button
            className="primary-button mt-3 download-chart-btn"
            onClick={downloadChart}
          >
            Capture
          </button>

          <div id="charts" className="charts-container">
            <div
              className={
                "chart" +
                " " +
                (currentChartID === chartTypes[0].id ? "active" : "")
              }
            >
              <Bar options={options} data={data} />
            </div>

            <div
              className={
                "chart" +
                " " +
                (currentChartID === chartTypes[1].id ? "active" : "")
              }
            >
              <Pie data={pieData} />
            </div>

            <div
              className={
                "chart" +
                " " +
                (currentChartID === chartTypes[2].id ? "active" : "")
              }
            >
              <Scatter options={scatterChartOptions} data={scatterChartData} />
            </div>

            <div
              className={
                "chart" +
                " " +
                (currentChartID === chartTypes[3].id ? "active" : "")
              }
            >
              <WordCloud data={words} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
