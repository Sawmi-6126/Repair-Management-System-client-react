import React from "react";
import "../Styles/Pages.css";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaymentForm from "./PaymentForm";
import Button from "react-bootstrap/Button";

function Payment() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="main">
      <section className="section">
        <Button
          variant="success"
          type="submit"
          size="lg"
          onClick={() => setModalShow(true)}
        >
          Payment
        </Button>
        <PaymentForm show={modalShow} onHide={() => setModalShow(false)} />
        <br></br>
        <div className="payment-view">
          <br></br>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Job_id</TableCell>
                  <TableCell align="right">Customer Name</TableCell>
                  <TableCell align="right">Invoice No</TableCell>
                  <TableCell align="right">Bill Amount</TableCell>
                  <TableCell align="right">Advance</TableCell>
                  <TableCell align="right">Remaining Amount</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
}

export default Payment;
