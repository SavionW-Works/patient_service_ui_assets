import AppContentArea from "@components/AppContentArea";
import AppNavMenu from "@components/navigation/AppNavMenu";
import { appWrapper } from "@styles/styles";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patients from "@components/Patients";
import Home from "@components/Home";
import Hospitals from "@components/Hospitals";
import Physicians from "@components/Physicians";
import Nurses from "@components/Nurses";
import Appointments from "@components/Appointments";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={appWrapper}>
        <AppNavMenu />
        <AppContentArea />
      </Box>
      <Routes>
        <Route path="/patients" element={<Patients />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/physicians" element={<Physicians />} />
        <Route path="/nurses" element={<Nurses />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
