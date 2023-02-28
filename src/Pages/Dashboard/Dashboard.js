import React, { useState, useEffect } from "react";
import "../Styles/Pages.css";
import axios from "axios";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import { color } from "@mui/system";
// import Row from "react-bootstrap/Row";

function Dashboard() {
  const [countCustomer, setCustomer] = useState("");
  const [countTechnician, setTechnician] = useState("");
  const [countPending, setPending] = useState("");
  const [countCompleted, setCompleted] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    customerCount();
    technicianCount();
    pendingCount();
    completedCount();
  }, []);

  const customerCount = async () => {
    try {
      const response = await axios.get("http://localhost:5000/count/customer");
      console.log(response);
      console.log(response.data);
      setCustomer(response.data.countCustomer);
      setError("");
    } catch (error) {
      setCustomer("");
      console.log(error);
      setError("Internal server error");
    }
  };

  const technicianCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/count/technician"
      );
      console.log(response);
      console.log(response.data);
      setTechnician(response.data.countTechnician);
      setError("");
    } catch (error) {
      setCustomer("");
      console.log(error);
      setError("Internal server error");
    }
  };

  const pendingCount = async () => {
    try {
      const response = await axios.get("http://localhost:5000/count/pending");
      console.log(response);
      console.log(response.data);
      setPending(response.data.countPending);
      setError("");
    } catch (error) {
      setCustomer("");
      console.log(error);
      setError("Internal server error");
    }
  };

  const completedCount = async () => {
    try {
      const response = await axios.get("http://localhost:5000/count/completed");
      console.log(response);
      console.log(response.data);
      setCompleted(response.data.countCompleted);
      setError("");
    } catch (error) {
      setCustomer("");
      console.log(error);
      setError("Internal server error");
    }
  };

  return (
    <div className="main">
      <section className="section-dashboard">
        <p className="date"> {today} </p>
        <div className="overview">
          <h3>Overview</h3>
          <hr></hr>
          <>
            <div className="overview-customer">
              <a href="/customer">
                <BsIcons.BsPeopleFill size={35} />
              </a>
              <h6>
                <strong>Customers: {countCustomer}</strong>
              </h6>
              {error && <p>Error: {error}</p>}
            </div>

            <div className="overview-tasks">
              <a href="/repair">
                <GiIcons.GiAutoRepair size={35} />
              </a>
              <h6>
                <strong>Tasks:</strong>
              </h6>
              {error && <p style={{ color: "red" }}>Error: {error}</p>}
            </div>

            <div className="overview-technician">
              <a href="/technician">
                <MdIcons.MdManageAccounts size={35} />
              </a>
              <h6>
                <strong>Technicians: {countTechnician}</strong>
              </h6>
              {error && <p>Error: {error}</p>}
            </div>
          </>
        </div>

        <br></br>
        <br></br>

        <div className="daily-tasks">
          <h3>Daily Task Details</h3>
          <hr></hr>
          <>
            <div className="pending-task">
              <AiIcons.AiOutlineExclamationCircle size={40} />
              <h6>Pending Tasks: {countPending}</h6>
              {error && <p>Error: {error}</p>}
            </div>

            <div className="ongoing-task">
              <MdIcons.MdOutlinePending size={40} />
              <h6>Ongoing Tasks: {countCompleted}</h6>
              {error && <p>Error: {error}</p>}
            </div>

            <div className="completed-task">
              <BsIcons.BsCheckCircle size={35} />
              <h6>Completed Tasks: {countCompleted}</h6>
              {error && <p>Error: {error}</p>}
            </div>

            <div className="paid-task">
              <BiIcons.BiDollarCircle size={40} />
              <h6>Paid Tasks:</h6>
            </div>
          </>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
