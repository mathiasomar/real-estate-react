import { Flex, Typography } from "antd"

const ContentHeader = ({ title, descr }) => {
  return (
    <>
     <Flex align="center" justify="space-between">
        <Flex vertical gap="small">
          <Typography.Title level={4} type="secondary" strong className="capitalize">
            {title}
          </Typography.Title>
        </Flex>
        <Typography.Text type="success" className="capitalize">
          {descr}
        </Typography.Text>
      </Flex> 
    </>
  )
}

export default ContentHeader
