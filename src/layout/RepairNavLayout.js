import React from "react";
import { Outlet } from "react-router-dom";
import RepairNav from "../Components/RepairNav.js";

function RepairNavLayout() {
  return (
    <div>
      <div>
        <RepairNav />
        <Outlet />
      </div>
    </div>
  );
}

export default RepairNavLayout;
