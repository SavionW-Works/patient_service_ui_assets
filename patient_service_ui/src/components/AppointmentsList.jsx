import { useState, useEffect } from "react";
import { AppointmentService } from "@utils/api"; // Updated import
import { DataGrid } from "@mui/x-data-grid";
const AppointmentsList = () => {
  // Updated component name
  const [appointmentData, setAppointmentData] = useState([]); // Updated state and state setter names
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "patient_id", headerName: "PATIENT", width: 130 },
    { field: "physician_id", headerName: "PHYSICIAN", width: 130 },
    { field: "appointment_date", headerName: "DATE", width: 220 },
    { field: "description", headerName: "DESC", width: 220 },
  ];

  //Automatically grab appointment data once the page loads // Updated comment
  useEffect(() => {
    const fetchAppointments = async () => {
      // Updated function name
      try {
        const data = await AppointmentService.getAllAppointments(); // Updated service name
        console.log(data);
        setAppointmentData(data); // Updated state setter
      } catch (error) {
        console.log("Failed to fetch appointments", error); // Updated log message
      }
    };

    fetchAppointments();
  }, []);
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={appointmentData} // Updated state variable
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default AppointmentsList; // Updated component export
