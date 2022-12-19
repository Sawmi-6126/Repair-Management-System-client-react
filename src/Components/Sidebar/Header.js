// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import Sidebar from "./Sidebar.js";
// import "./Sidebar.css";
// import { SidebarData } from "./SidebarData.js";

// function Header() {
//   const [sidebar, setSidebar] = useState(false);
//   const showSidebar = () => setSidebar(!sidebar);
//   const navigate = useNavigate();
//   const navigateToSignin = () => {
//     navigate("/signin");
//   };

//   const navigateToSignup = () => {
//     navigate("/signup");
//   };
//   return (
//     <div className="navbar">
//       <Link to="#" className="menu-bars">
//         <FaIcons.FaBars onClick={showSidebar} />
//       </Link>
//       <Typography
//         variant="h5"
//         component="div"
//         sx={{ flexGrow: 1 }}
//         color="primary"
//         padding={2}
//       >
//         Repair Management System
//       </Typography>
//       <Button color="info" onClick={navigateToSignin}>
//         Login
//       </Button>
//       <Button color="info" onClick={navigateToSignup}>
//         Signup
//       </Button>
//       <Sidebar />
//     </div>
//   );
// }

// export default Header;
