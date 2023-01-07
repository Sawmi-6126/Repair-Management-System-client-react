import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import Table from "react-bootstrap/Table";

function Technician() {
  const navigate = useNavigate();

  const navigateToAddTechnician = () => {
    navigate("/addtechnician");
  };

  const [technician, setTechnician] = useState([]);

  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [appointment, setAppointment] = useState("");
  const [epfno, setEpfno] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");

  const navigateToUpdateTechnician = () => {
    navigate("/updatetechnician");
  };

  return (
    <div className="page-content">
      <section className="section-main">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdManageAccounts /> &nbsp;
            <b> Technician</b>
          </h5>
          <hr></hr>
        </div>
        <div className="components">
          <Button variant="contained" onClick={navigateToAddTechnician}>
            <MdIcons.MdAdd />
            Add New Technician
          </Button>
        </div>
        <div className="table-control">
          <Table striped className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>NIC</th>
                <th>Mobile No.</th>
                <th>Appointment Type</th>
                <th>EPF No.</th>
                <th>Basic Salary</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Thanu</td>
                <td>994562321V</td>
                <td>0754585365</td>
                <td>Permanent</td>
                <td>1257</td>
                <td>20,000</td>
                <td>Colombo</td>
                <td>
                  <Button
                    variant="contained"
                    onClick={navigateToUpdateTechnician}
                  >
                    <MdIcons.MdCreate />
                  </Button>{" "}
                  &nbsp;
                  <Button
                    style={{
                      padding: "5px",
                      backgroundColor: "red",
                    }}
                    variant=""
                  >
                    <MdIcons.MdDelete />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
}

export default Technician;
