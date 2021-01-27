import React from "react";
import * as AiIcons from "react-icons/ai";
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Tổng quan",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Menu",
    path: "/orders",
    icon: <AiIcons.AiOutlineFileText />,
    cName: "nav-text",
  },
  {
    title: "Kho",
    path: "/warehouses",
    icon: <MdIcons.MdStore />,
    cName: "nav-text",
  },
  {
    title: "Sản Phẩm",
    path: "/products",
    icon: <AiIcons.AiOutlineProfile />,
    cName: "nav-text",
  },
  {
    title: "Khách hàng",
    path: "/customers",
    icon: <Io5Icons.IoPeopleCircleOutline />,
    cName: "nav-text",
  },
  {
    title: "Nhân viên",
    path: "/staffs",
    icon: <Io5Icons.IoPersonCircleOutline />,
    cName: "nav-text",
  },
  {
    title: "Báo cáo",
    path: "/reports",
    icon: <RiIcons.RiCalendarTodoFill />,
    cName: "nav-text",
  },
  {
    titleExit: "Thoát",
    path: "/exit",
    iconExit: <IoIcons.IoMdExit />,
    cNameExit: "nav-text-exit",
  },
];
