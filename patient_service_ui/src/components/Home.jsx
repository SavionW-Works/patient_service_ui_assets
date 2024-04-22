import { useLocation } from "react-router-dom";
const Home = () => {
  let location = useLocation();
  if (location.pathname === "/home") {
    return (
      <>
        <h1>Home</h1>
      </>
    );
  }
};
export default Home;
