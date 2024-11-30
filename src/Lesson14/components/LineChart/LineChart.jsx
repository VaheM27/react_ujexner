import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./LineChart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({
  selectedPoint,
  lastSix,
  setFilterLastSix,
  options,
  data,
}) => {
  return (
    <div className="chartBox">
      <div className="chart-l">
        <div className="chart-head">
          <h2>Blood Pressure</h2>
          <button onClick={() => setFilterLastSix((prev) => !prev)}>
            {" "}
            {lastSix ? "Last 6 Months " : "All times"}
            <span>
              <i
                className={`bi ${
                  lastSix ? "bi-chevron-up" : "bi-chevron-down"
                }`}></i>
            </span>
          </button>
        </div>
        <div className="canvas-box">
          <Line data={data} options={options} />
        </div>
      </div>

      <div className="chart-r">
        <div>
          <h4 className="systolic">Systolic</h4>
          <p>{selectedPoint?.systolic}</p>
          <span>{selectedPoint?.systolicLevel}</span>
        </div>
        <span className="line"></span>
        <div>
          <h4 className="diastolic">Diastolic</h4>
          <p>{selectedPoint?.diastolic}</p>
          <span>{selectedPoint?.diastolicLevel}</span>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
