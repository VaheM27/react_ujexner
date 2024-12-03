import downloadIcon from "../../assets/png/download.png"
import "./LabResults.scss";

const LabResults = ({ results, download }) => (
  <div className="labResults">
    <h3>Lab Results</h3>
    <div className="resultBox">
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <span>{result}</span>
            <button onClick={download}><img src={downloadIcon} alt="download" /></button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default LabResults;
