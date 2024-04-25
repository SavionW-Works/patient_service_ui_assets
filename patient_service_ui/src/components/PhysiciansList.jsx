import { useState, useEffect } from "react";
import { PhysicianService } from "@utils/api";
import { DataGrid } from "@mui/x-data-grid";
const PhysiciansList = () => {
  const [physicianData, setPhysicianData] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "FIRST NAME", width: 130 },
    { field: "last_name", headerName: "LAST NAME", width: 130 },
    { field: "specialty", headerName: "SPECIALTY", width: 130 },
    { field: "position", headerName: "POSITION", width: 130 },
    { field: "hospital_id", headerName: "HOSPITAL ID", width: 70 },
    { field: "department_id", headerName: "DEPARTMENT ID", width: 70 },
  ];

  //Automatically grab hospital data once the page loads
  useEffect(() => {
    const fetchPhysicians = async () => {
      try {
        const data = await PhysicianService.getAllPhysicians();
        console.log(data);
        setPhysicianData(data); // Updated to setPhysicianData
      } catch (error) {
        console.log("Failed to fetch physicians", error);
      }
    };

    fetchPhysicians();
  }, []);

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={physicianData}
          columns={columns}
          pageSize={7}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default PhysiciansList;

/**
- Make sure your backend's main.py has the right CORs to communicate with the backend 
localhost:3000 
localhost:8000 
localhost:5432 (port of postgres)
*/
