import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Table from "react-bootstrap/Table";

function Machine() {
  const navigate = useNavigate();

  const navigateToAddNewMachine = () => {
    navigate("/addmachine");
  };
  const navigateToUpdateMachine = () => {
    navigate("/updatemachine");
  };

  return (
    <div className="page-content">
      <section className="section-main">
        <div className="col-md-6">
          <h5>
            <FaIcons.FaTools /> &nbsp;
            <b> Machine</b>
          </h5>
          <hr></hr>
        </div>
        <div className="components">
          <Button variant="contained" onClick={navigateToAddNewMachine}>
            <MdIcons.MdAdd />
            Add New Machine Details
          </Button>
        </div>
        <div className="table-control">
          <Table striped className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Machine Code</th>
                <th>Machine Type</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>HG001-R</td>
                <td>Angle Grinder</td>
                <td>Hugo</td>
                <td>Red</td>
                <td>
                  <Button variant="contained" onClick={navigateToUpdateMachine}>
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

export default Machine;
