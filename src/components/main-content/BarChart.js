import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default BarChart;