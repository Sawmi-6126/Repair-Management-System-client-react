import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Table from "react-bootstrap/Table";

function Parts() {
  const navigate = useNavigate();

  const navigateToAddParts = () => {
    navigate("/addparts");
  };
  const navigateToUpdateParts = () => {
    navigate("/updateparts");
  };

  return (
    <div className="page-content">
      <section className="section-main">
        <div className="col-md-6">
          <h5>
            <FaIcons.FaTools /> &nbsp;
            <b> Parts Pool</b>
          </h5>
          <hr></hr>
        </div>
        <div className="components">
          <Button variant="contained" onClick={navigateToAddParts}>
            <MdIcons.MdAdd />
            Add New Parts
          </Button>
        </div>
        <div className="table-control">
          <Table striped className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Barcode</th>
                <th>Description</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>TN121</td>
                <td>Armature</td>
                <td>7,500</td>
                <td>10</td>
                <td>10%</td>
                <td>
                  <Button variant="contained" onClick={navigateToUpdateParts}>
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

export default Parts;
