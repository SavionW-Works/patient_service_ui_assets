import { useLocation } from "react-router-dom";

import HospitalsList from "@components/HospitalsList";
const Hospitals = () => {
  let location = useLocation();
  if (location.pathname === "/hospitals") {
    return (
      <>
        <h1>Hospitals</h1>
        <HospitalsList />
      </>
    );
  }
};
export default Hospitals;
