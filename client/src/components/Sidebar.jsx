import { HiOutlineUsers } from "react-icons/hi";
import { Flex, Menu } from "antd";
import logo from "../assets/fav.png";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <img src={logo} width={90} alt="" />
        </div>
      </Flex>
      <Menu
        defaultSelectedKeys={["/dashboard"]}
        mode="inline"
        theme="dark"
        className="menu-bar"
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          {
            key: "/dashboard",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "21",
            label: "Agents",
            icon: <HiOutlineUsers />,
            children: [
              {
                key: "/dashboard/agents",
                label: "View Agents",
              },
              {
                key: "/dashboard/add-agent",
                label: "Add Agent",
              },
            ],
          },
          {
            key: "22",
            label: "Admin",
            icon: <UserOutlined />,
            children: [
              {
                key: "/dashboard/admins",
                label: "View Admins",
              },
              {
                key: "/dashboard/add-admin",
                label: "Add Admin",
              },
            ],
          },
          {
            key: "3",
            label: "Properties",
            icon: <HiOutlineUsers />,
            children: [
              {
                key: "/dashboard/categories",
                label: "Category",
              },
              {
                key: "/dashboard/properties",
                label: "View Properties",
              },
              {
                key: "/dashboard/add-property",
                label: "Add Property",
              },
            ],
          },
          // {
          //   key: "/signout",
          //   icon: <PoweroffOutlined />,
          //   label: "Logout",
          //   danger: true
          // },
        ]}
      ></Menu>
    </>
  );
};

export default Sidebar;
