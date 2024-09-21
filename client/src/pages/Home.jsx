import { Card, Col, Row, Space, Statistic } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import RecentOrders from "../components/RecentOrders";
import Chart from "../components/Chart";
import ContentHeader from "../components/ContentHeader";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { userData } = useAuth();
  return (
    <>
      <ContentHeader title="Dashboard" descr={`Welcome ${userData.name}`} />
      {/* <Space direction="horizontal">
        <DashboardCard title="Orders" value="12345" />
        <DashboardCard title="Inventory" value="12345" />
        <DashboardCard title="Customers" value="12345" />
        <DashboardCard title="Revenue" value="12345" />
      </Space> */}
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6} className="gutter-row">
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255, 0, 0.25)",
                  borderRadius: 20,
                  fontSize: "3rem",
                  padding: 8,
                }}
              />
            }
            title="Orders"
            value="12345"
          />
        </Col>
        <Col span={6} className="gutter-row">
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0, 255, 0.25)",
                  borderRadius: 20,
                  fontSize: "3rem",
                  padding: 8,
                }}
              />
            }
            title="Inventory"
            value="12345"
          />
        </Col>
        <Col span={6} className="gutter-row">
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(0,255, 255, 0.25)",
                  borderRadius: 20,
                  fontSize: "3rem",
                  padding: 8,
                }}
              />
            }
            title="Customers"
            value="12345"
          />
        </Col>
        <Col span={6} className="gutter-row">
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255, 0, 0, 0.25)",
                  borderRadius: 20,
                  fontSize: "3rem",
                  padding: 8,
                }}
              />
            }
            title="Revenue"
            value="12345"
          />
        </Col>
      </Row>
      <div className="mt-5">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <RecentOrders />
          </Col>
          <Col span={16}>
            <Chart />
          </Col>
        </Row>
      </div>
    </>
  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default Home;
