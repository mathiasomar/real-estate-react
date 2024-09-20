import { Button, Flex } from "antd";
import {
  MessageOutlined,
  NotificationOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

const HeaderProfile = ({ handleLogout }) => {

  return (
    <Flex align="center" gap="3rem">
      <Flex align="center" gap="10px">
        <MessageOutlined className="header-icon" />
        <NotificationOutlined className="header-icon" />
        <Button type="link" danger onClick={handleLogout}>
          <PoweroffOutlined />
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderProfile;
