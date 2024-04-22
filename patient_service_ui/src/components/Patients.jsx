import { useLocation } from "react-router-dom";
const Patients = () => {
  let location = useLocation();
  if (location.pathname === "/patients") {
    return (
      <>
        <h1>Patients</h1>
      </>
    );
  }
};
export default Patients;
