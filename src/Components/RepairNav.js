import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./RepairNav.css";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function RepairNav() {
  const navigate = useNavigate();

  // const navigateToRepair = () => {
  //   navigate("/updaterepair/:id");
  // };
  // const navigateToRepairParts = () => {
  //   navigate("/repairparts");
  // };

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/updaterepair">Repair</Nav.Link>
            <Nav.Link href="/repairparts">Parts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <ButtonGroup
        className="buttonGroup"
        variant="text"
        aria-label="text button group"
        size="lg"
        color="warning"
      >
        <Button className="navbutton" onClick={navigateToRepair}>
          Repair
        </Button>
        <Button className="navbutton" onClick={navigateToRepairParts}>
          Parts
        </Button>
      </ButtonGroup> */}
    </div>
  );
}

export default RepairNav;
