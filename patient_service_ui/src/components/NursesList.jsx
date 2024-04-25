import { useState, useEffect } from "react";
import { NurseService } from "@utils/api"; // Updated import
import { DataGrid } from "@mui/x-data-grid";
const NursesList = () => {
  // Updated component name
  const [nurseData, setNurseData] = useState([]); // Updated state and state setter names
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "FIRST NAME", width: 130 },
    { field: "last_name", headerName: "LAST NAME", width: 130 },
    { field: "qualification", headerName: "QUALIFICATION", width: 130 },
    { field: "position", headerName: "POSITION", width: 130 },
    { field: "hospital_id", headerName: "NURSE ID", width: 100 }, // Updated field name
    { field: "department_id", headerName: "DEPT. ID", width: 70 },
  ];

  //Automatically grab nurse data once the page loads // Updated comment
  useEffect(() => {
    const fetchNurses = async () => {
      // Updated function name
      try {
        const data = await NurseService.getAllNurses(); // Updated service name
        console.log(data);
        setNurseData(data); // Updated state setter
      } catch (error) {
        console.log("Failed to fetch nurses", error); // Updated log message
      }
    };

    fetchNurses();
  }, []);
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={nurseData} // Updated state variable
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default NursesList; // Updated component export
