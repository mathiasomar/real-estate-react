import { Avatar, Button, Card, Flex, Form, Input, Typography } from "antd";
import { UserOutlined } from '@ant-design/icons'
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Flex
      vertical
      gap="large"
      align="center"
      justify="center"
      className="login-container"
    >
      <Typography.Title
        level={2}
        strong
        className="uppercase text-center"
        style={{ color: "#fff" }}
      >
        real estate management system
      </Typography.Title>
      <Card className="lg-card">
        <Flex gap="large" align="center">
          {/* image */}
          <Flex flex={1} className="lg-image">
            <img src={loginImage} alt="" />
          </Flex>
          {/* form */}
          <Flex vertical flex={1}>
            <Avatar icon={<UserOutlined />} size={80} className="mx-auto mb-3" />
            <Typography.Title
              level={4}
              strong
              className="capitalize text-center lg-title"
            >
              Login here
            </Typography.Title>
            <Form layout="vertical" autoComplete="off">
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter email!",
                  },
                  {
                    type: "email",
                    message: "Email is not valid",
                  },
                ]}
              >
                <Input placeholder="Email Address" size="large" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" size="large" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" className="lg-btn">Sign In</Button>
              </Form.Item>
            </Form>
            <Flex align="center">
                <span>Forgot password?</span>
                <Link to="/">
                    <Button type="link">Recover password</Button>
                </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Login;
