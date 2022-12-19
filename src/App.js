import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Customer from "./Pages/Customer/Customer";
import AddCustomer from "./Pages/Customer/AddCustomer";
import UpdateCustomer from "./Pages/Customer/UpdateCustomer";
import Parts from "./Pages/Parts/Parts";
import AddParts from "./Pages/Parts/AddParts";
import UpdateParts from "./Pages/Parts/UpdateParts";
import Repair from "./Pages/Repair/Repair";
import Technician from "./Pages/Technician/Technician";
import AddTechnician from "./Pages/Technician/AddTechnician";
import UpdateTechnician from "./Pages/Technician/UpdateTechnician";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Signup from "./Pages/Login/Signup";
import Signin from "./Pages/Login/Signin";
import AddRepair from "./Pages/Repair/AddRepair";
import UpdateRepair from "./Pages/Repair/UpdateRepair";
import Header from "./Components/Sidebar/Header";
import Payment from "./Pages/Payment/Payment";
import SidebarLayout from "./SidebarLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>

        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/addcustomer" element={<AddCustomer />} />
            <Route path="/updatecustomer" element={<UpdateCustomer />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/addparts" element={<AddParts />} />
            <Route path="/updateparts" element={<UpdateParts />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/addrepair" element={<AddRepair />} />
            <Route path="/updaterepair" element={<UpdateRepair />} />
            <Route path="/technician" element={<Technician />} />
            <Route path="/addtechnician" element={<AddTechnician />} />
            <Route path="/updatetechnician" element={<UpdateTechnician />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
