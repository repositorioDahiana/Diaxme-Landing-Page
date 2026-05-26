import "../assets/styles/patient-security.css";
import PatientSecurityHero from "../components/patientsecurity/PatientSecurityHero";
import PatientHumanization from "../components/patientsecurity/PatientHumanization";
import PatientPolicy from "../components/patientsecurity/PatientPolicy";
import PatientParticipation from "../components/patientsecurity/PatientParticipation";

function PatientSecurity() {
  return (
    <div className="patient-security-page">
      <PatientSecurityHero />
      <PatientHumanization />
      <PatientPolicy />
      <PatientParticipation />
    </div>
  );
}

export default PatientSecurity;