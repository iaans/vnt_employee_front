import React, { useState, useEffect } from "react";

import api from "../../services/api";
import "antd/dist/antd.css";
import { Table, Space } from "antd";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  async function getEmployees() {
    const response = await api.get("/list-employees");
    setEmployees(response.data);
    console.log(employees);
  }

  function deleteEmployee(row) {
    // const response = await api.delete(`/delete-employee/${row._id}`);

    api
      .delete(`/delete-employee/${row._id}`)
      .then(async () => {
        await getEmployees();
      })
      .catch((error) => console.log(error));
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
      key: "birthDate",
      render: (date) => {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }); // 08/19/2020 (month and day with two digits);
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },

    {
      title: "Action",
      key: "action",
      render: (row) => (
        <Space size="middle">
          <a>Edit</a>
          <a onClick={() => deleteEmployee(row)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={employees} />
    </div>
  );
}
