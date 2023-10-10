import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp} from '@fortawesome/free-solid-svg-icons'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from '../utils/Data';
import PieChart from './BarChart';

Chart.register(CategoryScale);

export default function Analytics() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#6c62dd",
          "#d2cff8"
        ],
        borderRadius: 10,
      }
    ]
  });
 
  return (
    <div className='analytics-wrapper'>
      <div className="total-sales-wrapper">
        <div className="sales-cost">
          <p className='title'>Total Sales & Cost</p>
          <p className='grey-12 m-0'>Last 60 days</p>
        </div>
        <div className="sales-amount">
          <div className="amount-percent">
            <span className='amount'>$956.82k</span>
            <span className='percent'><FontAwesomeIcon icon={faCaretUp} color='#74ca7d' className='caret-up'/>+5.4%</span>
          </div>
          <p className='previous-year'>+8.20k <span className='grey-12'>vs prev. 60 days</span></p>
        </div>
      </div>
      <div className="analytic">
        <div className='analytic-months'>
          <p className='title m-0'>Analytic <span>+5.4%</span></p>
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
  )
}
