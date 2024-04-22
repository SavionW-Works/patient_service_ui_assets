import { useLocation } from "react-router-dom";
const Physicians = () => {
  let location = useLocation();
  if (location.pathname === "/physicians") {
    return (
      <>
        <h1>Physicians</h1>
      </>
    );
  }
};
export default Physicians;
