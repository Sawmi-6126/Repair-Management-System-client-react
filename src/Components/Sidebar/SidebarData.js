import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaIcons.FaTachometerAlt />,
    cName: "nav-text",
  },
  {
    title: "Customer",
    path: "/customer",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Repair",
    path: "/repair",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text",
  },
  {
    title: "Parts Pool",
    path: "/parts",
    icon: <FaIcons.FaToolbox />,
    cName: "nav-text",
  },
  {
    title: "Technician",
    path: "/technician",
    icon: <MdIcons.MdManageAccounts />,
    cName: "nav-text",
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <FaIcons.FaMoneyBillWave />,
    cName: "nav-text",
  },
  {
    title: "Report",
    path: "/report",
    icon: <HiIcons.HiDocumentReport />,
    cName: "nav-text",
  },
];
