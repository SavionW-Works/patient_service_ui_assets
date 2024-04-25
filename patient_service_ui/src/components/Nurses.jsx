import { useLocation } from "react-router-dom";
import NursesList from "@components/NursesList";
const Nurses = () => {
  let location = useLocation();
  if (location.pathname === "/nurses") {
    return (
      <>
        <h1>Nurses</h1>
        <NursesList />
      </>
    );
  }
};
export default Nurses;
