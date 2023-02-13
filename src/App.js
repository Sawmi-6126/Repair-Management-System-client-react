import "./App.css";
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
import Signup from "./Pages/Login/Signup";
import Signin from "./Pages/Login/Signin";
import AddRepair from "./Pages/Repair/AddRepair";
import UpdateRepair from "./Pages/Repair/UpdateRepair";
import Payment from "./Pages/Payment/Payment";
import SidebarLayout from "./SidebarLayout";
import RepairParts from "./Pages/Repair/RepairParts";
import RepairNavLayout from "./RepairNavLayout";
import Report from "./Pages/Report";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/addcustomer" element={<AddCustomer />} />
            <Route path="/updatecustomer/:id" element={<UpdateCustomer />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/addparts" element={<AddParts />} />
            <Route path="/updateparts/:id" element={<UpdateParts />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/addrepair" element={<AddRepair />} />
            <Route element={<RepairNavLayout />}>
              <Route path="/repairparts" element={<RepairParts />} />
              <Route path="/updaterepair/:id" element={<UpdateRepair />} />
            </Route>
            <Route path="/technician" element={<Technician />} />
            <Route path="/addtechnician" element={<AddTechnician />} />
            <Route
              path="/updatetechnician/:id"
              element={<UpdateTechnician />}
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/report" element={<Report />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
