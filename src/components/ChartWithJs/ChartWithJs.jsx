import { useEffect, useRef } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const ChartWithJs = () => {
  const dark = useSelector((state) => state.darkmode.dark);
  const chartRef = useRef(null);
  const lineRef = useRef(null);
  const colorText = dark ? ["#fff"] : ["#000"];
  const data = {
    labels: ["دیتای بنفش", "دیتای سبز", "دیتای آبی"],
    datasets: [
      {
        label: "چارت دونات",
        data: [30, 120, 50],
        backgroundColor: ["#8884d8", "#82ca9d", "#3b82f6"],
        borderColor: colorText,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: colorText,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "چارت دونات",
        color: colorText,
        font: { size: 16 },
      },
    },
    cutout: "50%",
  };
  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: colorText,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "چارت خطی",
        color: colorText,
        font: { size: 16 },
      },
      tooltip: {
        enabled: true,
        position: "nearest",
        padding: 10,
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: colorText,
        },
        grid: {
          color: "#b7b6b661",
        },
      },
      y: {
        ticks: {
          color: colorText,
        },
        grid: {
          color: "#b7b6b661",
        },
      },
    },
  };
  const labels = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "دیتای سبز",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointStyle: "circle",
        pointRadius: 6,
      },
      {
        label: "دیتای صورتی",
        data: [45, 60, 70, 40, 56, 75, 30],
        fill: false,
        borderColor: "rgb(180, 96, 192)",
        tension: 0.1,
        pointStyle: "star",
        pointRadius: 6,
      },
    ],
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      if (lineRef.current) {
        lineRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex justify-center items-center h-[500px] p-10">
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <div className="flex justify-center items-center h-[500px] p-10">
        <Line ref={lineRef} options={options2} data={data2} labels={labels} />
      </div>
    </div>
  );
};

export default ChartWithJs;
