import "../assets/styles/patient-rights.css";
import PatientRightsHero from "../components/patientrights/PatientRightsHero";
import PatientRi from "../components/patientrights/PatientRi";
import PatientDuties from "../components/patientrights/PatientDuties";


function PatientRights() {
  return (
    <div className="patient-page">
      <PatientRightsHero />
      <PatientRi />
      <PatientDuties />
    </div>
  );
}

export default PatientRights;