import { useLocation } from "react-router-dom";
import AppointmentsList from "@components/AppointmentsList";
const Appointments = () => {
  let location = useLocation();
  if (location.pathname === "/appointments") {
    return (
      <>
        <h1>Appointments</h1>
        <AppointmentsList />
      </>
    );
  }
};
export default Appointments;
