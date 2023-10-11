import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/Data";
import PieChart from "./BarChart";

Chart.register(CategoryScale);

export default function Analytics() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#6c62dd", "#d2cff8"],
        borderRadius: 10,
      },
    ],
  });

  return (
    <div className="analytics-wrapper flex justify-start flex-row">
      <div className="total-sales-wrapper w-2/4 flex justify-between flex-col">
        <div className="sales-cost">
          <p className="title font-semibold text-xl">Total Sales & Cost</p>
          <p className="text-xs text-grey-text m-0">Last 60 days</p>
        </div>
        <div className="sales-amount">
          <div className="amount-percent flex items-center">
            <span className="amount text-primary font-bold text-4xl">
              $956.82k
            </span>
            <span className="percent font-bold text-xs">
              <FontAwesomeIcon
                icon={faCaretUp}
                color="#74ca7d"
                className="caret-up"
              />
              +5.4%
            </span>
          </div>
          <p className="previous-year  font-medium text-sm">
            +8.20k{" "}
            <span className="text-xs text-grey-text">vs prev. 60 days</span>
          </p>
        </div>
      </div>
      <div className="analytic w-1/2">
        <div className=" flex justify-between items-center">
          <p className="title font-semibold m-0">
            Analytic <span className="text-xs  font-bold">+5.4%</span>
          </p>
          <select name="month" id="month">
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
          </select>
        </div>
        <div className="graph">
          <PieChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}
