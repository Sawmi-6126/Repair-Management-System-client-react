import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
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

function Customer() {
  const navigate = useNavigate();

  const navigateToAddNewCustomer = () => {
    navigate("/addcustomer");
  };

  const navigateToUpdateCustomer = () => {
    // var answer = window.confirm("Do you want to Update?");
    // if (answer) {
    getCustomerbyId();
    window.location = `/updatecustomer/${id}`;
    //return true;
    // } else {
    //   return false;
    // }
  };

  const [customer, setCustomer] = useState([]);

  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();

  const getCustomer = async () => {
    const response = await axios.get("http://localhost:5000/customer");
    setCustomer(response.data);
  };

  useEffect(() => {
    getCustomer();
  }, []);

  const deleteCustomer = async (id) => {
    try {
      if (window.confirm("Are you sure want to delete?")) {
        await axios.delete(`http://localhost:5000/customer/${id}`);
        getCustomer();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomerbyId = async () => {
    const response = await axios.get(`http://localhost:5000/customer/${id}`);
    setF_name(response.data.f_name);
    setL_name(response.data.l_name);
    setAddress(response.data.address);
    setMobile(response.data.mobile);
    setEmail(response.data.email);
  };

  return (
    <>
      <div className="page-content">
        <section className="section-main">
          <div className="col-md-6">
            <h5>
              <MdIcons.MdPerson /> &nbsp;
              <b> Customers</b>
            </h5>
            <hr></hr>
          </div>
          <div className="components">
            <Button variant="contained" onClick={navigateToAddNewCustomer}>
              <MdIcons.MdAdd />
              Add New Customer
            </Button>
            <br></br>
          </div>

          <div className="table-control">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Mobile No.</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customer.map((customer, index) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={customer.id}
                    >
                      <TableCell component="th" scope="row">
                        {customer.f_name}
                      </TableCell>
                      <TableCell align="right">{customer.l_name}</TableCell>
                      <TableCell align="right">{customer.mobile}</TableCell>
                      <TableCell align="right">{customer.address}</TableCell>
                      <TableCell align="right">{customer.email}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          onClick={navigateToUpdateCustomer}
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
                          onClick={() => deleteCustomer(customer.id)}
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
    </>
  );
}

export default Customer;
