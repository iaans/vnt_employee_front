import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import { Table, Space } from "antd";

import api from "../../services/api";

import {
  deleteEmployee,
  listEmployees,
  setUpdatingEmployee,
} from "../../store/actions/employee";

function EmployeeList({
  listEmployees,
  employees,
  deleteEmployee,
  setUpdatingEmployee,
}) {
  // const [employees, setEmployees] = useState([]);

  const history = useHistory();

  useEffect(() => {
    // getEmployees();
    listEmployees();
  }, []);

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
          <a
            onClick={() => {
              setUpdatingEmployee(row);
              history.push("/");
            }}
          >
            Edit
          </a>
          <a onClick={() => deleteEmployee(row._id)}>Delete</a>
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

const mapStateToProperties = (state) => {
  const { employees } = state.employee;

  return { employees };
};

const mapDispatchToProperties = (dispatch) => ({
  listEmployees: () => dispatch(listEmployees()),
  setUpdatingEmployee: ({
    _id,
    name,
    birthDate,
    gender,
    state,
    city,
    role,
    salary,
  }) =>
    dispatch(
      setUpdatingEmployee({
        _id,
        name,
        birthDate,
        gender,
        state,
        city,
        role,
        salary,
      })
    ),
  deleteEmployee: (id) => dispatch(deleteEmployee(id)),
});

export default connect(
  mapStateToProperties,
  mapDispatchToProperties
)(EmployeeList);
