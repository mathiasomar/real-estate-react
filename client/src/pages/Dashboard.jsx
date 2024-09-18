import { Button, Flex, Layout } from "antd";
import { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="dark"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <Flex align="center" justify="space-between">
            <Flex align="center" gap="small">
              <div>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  className="trigger-btn"
                ></Button>
              </div>
            </Flex>
          </Flex>
        </Header>
        <Content className="body-content">
            <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
