import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

function Technician() {
  const navigate = useNavigate();

  const navigateToAddTechnician = () => {
    navigate("/addtechnician");
  };

  const [technician, setTechnician] = useState([]);

  useEffect(() => {
    getTechnician();
  }, []);

  const getTechnician = async () => {
    const response = await axios.get("http://localhost:5000/technician");
    setTechnician(response.data);
    console.log(response.data);
  };

  const deleteTechnician = async (id) => {
    try {
      if (window.confirm("Are you sure want to delete?")) {
        await axios.delete(`http://localhost:5000/technician/${id}`);
        getTechnician();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToUpdateTechnician = (id) => {
    navigate(`/updatetechnician/${id}`);
  };

  return (
    <div className="main">
      <section className="section">
        <div className="components">
          <Button variant="contained" onClick={navigateToAddTechnician}>
            <MdIcons.MdAdd />
            Add New Technician
          </Button>
        </div>
        <div className="col-md-6">
          <h5>
            <MdIcons.MdManageAccounts /> &nbsp;
            <b> Technician</b>
          </h5>
          <hr></hr>
        </div>

        <div className="table-control">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>NIC</TableCell>
                  <TableCell>Mobile No.</TableCell>
                  <TableCell>Appointment Type</TableCell>
                  <TableCell>EPF No</TableCell>
                  <TableCell>Basic Salary</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {technician.map((technician, index) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={technician.id}
                  >
                    <TableCell component="th" scope="row">
                      {technician.name}
                    </TableCell>
                    <TableCell align="right">{technician.nic}</TableCell>
                    <TableCell align="right">{technician.t_mobile}</TableCell>
                    <TableCell align="right">
                      {technician.appointmentType}
                    </TableCell>
                    <TableCell align="right">{technician.epfno}</TableCell>
                    <TableCell align="right">{technician.salary}</TableCell>
                    <TableCell align="right">{technician.t_address}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() =>
                          navigateToUpdateTechnician(technician.id)
                        }
                      >
                        <MdIcons.MdCreate />
                      </Button>
                      &nbsp;
                      <Button
                        style={{
                          padding: "5px",
                          backgroundColor: "red",
                        }}
                        variant=""
                        onClick={() => deleteTechnician(technician.id)}
                      >
                        <MdIcons.MdDelete />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
}

export default Technician;
