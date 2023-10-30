import React from "react";
import * as AiIcons from "react-icons/ai";
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
// import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import { NavLink } from 'react-router-dom';

export const SidebarData = [
  {
    title: "Tổng quan",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Menu",
    path: "/orders",
    icon: <AiIcons.AiOutlineRead />,
  },
  {
    title: "Đơn hàng",
    path: "/orders-details",
    icon: <AiIcons.AiOutlineGold />,
  },
  {
    title: "Kho",
    path: "/warehouses",
    icon: <MdIcons.MdStore />,
  },
  {
    title: "Sản Phẩm",
    path: "/products",
    icon: <AiIcons.AiOutlineProfile />,
  },
  {
    title: "Khách hàng",
    path: "/customers",
    icon: <Io5Icons.IoPeopleCircleOutline />,
  },
  {
    title: "Nhân viên",
    path: "/employees",
    icon: <Io5Icons.IoPersonCircleOutline />,
  },
  {
    title: "Báo cáo",
    path: "/reports",
    icon: <AiIcons.AiOutlineLineChart />,
  },
].map((item, index) => {
  return {
    key: index,
    label: <NavLink to={item.path}>{item.title}</NavLink>,
    icon: item.icon,
  };
});
