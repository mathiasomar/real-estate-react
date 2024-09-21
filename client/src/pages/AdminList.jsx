import { Alert, Button, message, Popconfirm, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ContentHeader from "../components/ContentHeader";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAdmins } from "../api/admins";
import moment from 'moment'

const AdminList = () => {
  const { token } = useAuth();

  axios.defaults.headers.common["Authorization"] = token;

  const handleDelete = async (id) => {
    message.error("Deleted", id)
  }

  const {
    isLoading,
    isError,
    data: admins,
    error,
  } = useQuery({
    queryKey: ["admins"],
    queryFn: fetchAdmins,
    staleTime: 1000,
    // refetchInterval: 1000
  });

  if (isError)
    return (
      <Alert description={JSON.stringify(error)} icon type="error"></Alert>
    );
  return (
    <>
      <ContentHeader title="Admin list" descr="List of all admins" />
      <Link to="/dashboard/add-admin">
        <Button type="primary" className="mb-2">
          New Admin
        </Button>
      </Link>
      <Table
        bordered={true}
        loading={isLoading}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Role",
            dataIndex: "role",
          },
          {
            title: "Created At",
            dataIndex: "createdAt",
            render: (value) => {
              return moment(value).format("DD-MM-YYYY H:mm")
            },
          },
          {
            title: "Updated At",
            dataIndex: "updatedAt",
            render: (value) => {
              return moment(value).format("DD-MM-YYYY H:mm")
            },
          },
          {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (record) => (
              <Space size="middle">
                <Link>
                  <Button type="primary">
                    <EditOutlined />
                  </Button>
                </Link>
                <Popconfirm title="Sure to Delete?" onConfirm={() => handleDelete(record.key)}>
                  <Button danger>
                    <DeleteOutlined />
                  </Button>
                </Popconfirm>
              </Space>
            ),
          },
        ]}
        dataSource={admins}
        rowKey={(record) => record._id}
      ></Table>
    </>
  );
};

export default AdminList;
