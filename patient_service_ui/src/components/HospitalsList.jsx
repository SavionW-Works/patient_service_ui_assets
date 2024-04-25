import { useState, useEffect } from "react";
import { HospitalService } from "@utils/api";
import { DataGrid } from "@mui/x-data-grid";
const HospitalsList = () => {
  const [hospitalData, setHospitalData] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "NAME", width: 130 },
    { field: "brand", headerName: "BRAND", width: 130 },
    { field: "description", headerName: "DESC", width: 220 },
  ];

  //Automatically grab hospital data once the page loads
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const data = await HospitalService.getAllHospitals();
        console.log(data);
        setHospitalData(data);
      } catch (error) {
        console.log("Failed to fetch hospitals", error);
      }
    };

    fetchHospitals();
  }, []);
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={hospitalData}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default HospitalsList;

/**
- Make sure your backend's main.py has the right CORs to communicate with the backend 
localhost:3000 
localhost:8000 
localhost:5432 (port of postgres)
*/
