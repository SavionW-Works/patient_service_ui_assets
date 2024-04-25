import axios from "axios";
export const BASE_URL = "http://localhost:8000";
const PatientService = {
  getAllPatients: async () => {
    const { data } = await axios.request({
      url: `${BASE_URL}/patients`,
    });
    const patientsList = data.map((patient) => {
      return {
        ...patient,
        full_name: patient.first_name + " " + patient.last_name,
      };
    });
    return patientsList;
  },
  getPatientByPatientId: async (patientId) => {
    const { data } = await axios.request({
      url: `${BASE_URL}/patients/${patientId}`,
    });

    return data;
  },
  updatePatient: (patient) => {},
};
export { PatientService };

const HospitalService = {
  getAllHospitals: async () => {
    const { data } = await axios.request({
      url: `${BASE_URL}/hospital`,
    });
    const hospitalList = data.map((hospital) => {
      return {
        ...hospital,
        name: hospital.name,
      };
    });
    return hospitalList;
  },
  getHospitalByHosptialId: (id) => {},
  updateHospial: (hospital) => {},
};
export { HospitalService };

const PhysicianService = {
  getAllPhysicians: async () => {
    const { data } = await axios.request({
      url: `${BASE_URL}/physician`,
    });
    const physicianList = data.map((physician) => {
      return {
        ...physician,
        full_name: physician.first_name + " " + physician.last_name,
      };
    });
    return physicianList;
  },
  getPhysicianByPhysicianId: (id) => {},
  updatePhysician: (physician) => {},
};
export { PhysicianService };

const NurseService = {
  getAllNurses: async () => {
    const { data } = await axios.request({
      url: `${BASE_URL}/nurse`,
    });
    const nurseList = data.map((nurse) => {
      return {
        ...nurse,
        name: nurse.name,
      };
    });
    return nurseList;
  },
  getNurseByNurseId: (id) => {},
  updateNurse: (nurse) => {},
};
export { NurseService };

const AppointmentService = {
  getAllAppointments: async () => {
    // Updated function name
    const { data } = await axios.request({
      url: `${BASE_URL}/appointment`, // Updated URL
    });
    const appointmentList = data.map((appointment) => {
      // Updated variable name
      return {
        ...appointment,
        name: appointment.name,
      };
    });
    return appointmentList;
  },
  getAppointmentByAppointmentId: (id) => {}, // Updated function name
  updateAppointment: (appointment) => {}, // Updated function name
};
export { AppointmentService }; // Updated export

//Axios Response object: https://axios-http.com/docs/res_schema
