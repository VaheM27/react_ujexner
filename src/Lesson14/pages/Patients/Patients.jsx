import { useState } from "react";
import ClientSection from "../../components/ClientSection/ClientSection";
import "./Patients.scss";
import PatientContact from "../../components/PatientContact/PatientContact";
import LabResults from "../../components/LabResults/LabResults";
import DiagnosticList from "../../components/DiagnosticList/DiagnosticList";
import ChartSection from "../../components/ChartSection/ChartSection";

export const Patients = ({ data }) => {
  const [selectedClient, setSelectedClient] = useState(data[0]);

  const chooseUser = (id) => setSelectedClient(data.find(user => user.id === id) || null);

  const formatDate = (dateString) => !dateString ? "" : new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <main>
      <div className="container patientsContainer">
        <div className="patients-main">
          <ClientSection
            data={data}
            selected={selectedClient?.id || null}
            chooseUser={chooseUser}
          />
          <div className="pat-con">
            <ChartSection selectedClient={selectedClient} />
            {selectedClient?.diagnostic_list?.length > 0 && (
              <DiagnosticList diagnoses={selectedClient.diagnostic_list} />
            )}
          </div>
        </div>
        <div className="pat-con">
          {selectedClient && (
            <>
              <PatientContact
                name={selectedClient.name}
                src={selectedClient.profile_picture}
                birthdate={formatDate(selectedClient.date_of_birth)}
                gender={selectedClient.gender}
                mobile={selectedClient.phone_number}
                emMobile={selectedClient.emergency_contact}
                insurance={selectedClient.insurance_type}
              />
              {selectedClient.lab_results?.length > 0 && (
                <LabResults results={selectedClient.lab_results} />
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};
