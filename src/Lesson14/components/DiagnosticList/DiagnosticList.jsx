import "./DiagnosticList.scss";

const DiagnosticList = ({ diagnoses }) => (
  <div className="diagnosticList">
    <h3>Diagnostic List</h3>
    <div className="tableBox">
      <table>
        <thead>
          <tr className="th-r">
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnoses.map((diagnos, index) => (
            <tr key={diagnos + index}>
              <td>{diagnos.name}</td>
              <td>{diagnos.description}</td>
              <td>{diagnos.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DiagnosticList;
