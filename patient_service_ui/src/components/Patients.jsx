import { useLocation } from "react-router-dom";
import PatientsList from "@components/PatientsList";
const Patients = () => {
  let location = useLocation();
  if (location.pathname === "/patients") {
    return (
      <>
        <h1>Patients</h1>
        <PatientsList />
      </>
    );
  }
};
export default Patients;
