import React, { useEffect, useState } from "react";
import API from "./api";

function App() {

  const [employees, setEmployees] = useState([]);

  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const [attendanceEmployeeId, setAttendanceEmployeeId] = useState("");
  const [status, setStatus] = useState("Present");

  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  const addEmployee = async () => {
    await API.post("/employees", {
      employee_id: employeeId,
      name,
      email,
      department
    });

    fetchEmployees();

    setEmployeeId("");
    setName("");
    setEmail("");
    setDepartment("");
  };

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    fetchEmployees();
  };

  const markAttendance = async () => {
    const today = new Date().toISOString().split("T")[0];

    await API.post("/attendance", {
      employee_id: attendanceEmployeeId,
      date: today,
      status
    });

    alert("Attendance recorded");
  };

  const fetchAttendance = async () => {
    const res = await API.get(`/attendance/${attendanceEmployeeId}`);
    setAttendanceRecords(res.data);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>HRMS Lite</h1>

      <h2>Add Employee</h2>

      <input placeholder="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />

      <button onClick={addEmployee}>Add Employee</button>

      <h2>Employee List</h2>

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} ({emp.department})
            <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Mark Attendance</h2>

      <input placeholder="Employee ID" value={attendanceEmployeeId} onChange={(e) => setAttendanceEmployeeId(e.target.value)} />

      <select onChange={(e) => setStatus(e.target.value)}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button onClick={markAttendance}>Mark Attendance</button>

      <h2>View Attendance</h2>

      <input placeholder="Employee ID" value={attendanceEmployeeId} onChange={(e) => setAttendanceEmployeeId(e.target.value)} />

      <button onClick={fetchAttendance}>View Attendance</button>

      <ul>
        {attendanceRecords.map((record) => (
          <li key={record.id}>
            {record.date} - {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;