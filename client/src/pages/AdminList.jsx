import { Alert, Button, message, Popconfirm, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ContentHeader from "../components/ContentHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAdmins } from "../api/admins";

const AdminList = () => {
  const { token } = useAuth();

  axios.defaults.headers.common["Authorization"] = token;

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
      <Link to='/dashboard/add-admin'>
        <Button type="primary" className="mb-2">New Admin</Button>
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
          },
          {
            title: "Updated At",
            dataIndex: "updatedAt",
          },
          {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: () => (
              <Space size="middle">
                <Link>
                  <Button type="primary">
                    <EditOutlined />
                  </Button>
                </Link>
                <Popconfirm title="Sure to Delete?" onConfirm={{}}>
                  <Button danger>
                    <DeleteOutlined />
                  </Button>
                </Popconfirm>
              </Space>
            ),
          },
        ]}
        dataSource={admins}
      ></Table>
    </>
  );
};

export default AdminList;
