import { Table } from "antd";
import ContentHeader from "../components/ContentHeader";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminList = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        setLoading(true)
        const fetchUsers = async () => {
            try {
                const res = await axios.get('/api/users/admin')
                setDataSource(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUsers()
    }, []);
  return (
    <>
      <ContentHeader title="Admin list" descr="List of all admins" />
      <Table
        bordered={true}
        loading={loading}

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
          },
        ]}
        dataSource={dataSource}
      ></Table>
    </>
  );
};

export default AdminList;
