import tools from "../../Images/profile.jpg";
import "./Page.css";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <img
        src={tools}
        alt="Tools"
        className="tools"
        style={{ width: "100%", height: "625px" }}
      />
      <div class="name">Green House Trading Company</div>
    </div>
  );
};

export default LandingPage;
