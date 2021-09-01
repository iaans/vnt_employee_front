import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";

import { Alert } from "antd";
import "antd/dist/antd.css";

import api from "../../services/api";

import { createEmployee } from "../../store/actions/employee";

function EmployeeForm({ createEmployee, success }) {
  const [name, setName] = useState();
  const [birthDate, setDate] = useState();
  const [gender, setGenre] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [role, setJob] = useState();
  const [salary, setSalary] = useState();
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  // const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUfs();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSuccess(false);
  //   }, 6000);
  // }, [success]);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 6000);
  }, [error]);

  async function getUfs() {
    // fazer chamada para a rota de busca dos ufs
    // com o resultado do back, preencha os ufs com setUfs

    const response = await api.get("/list-ufs");
    setUfs(response.data);

    console.log(ufs);
  }

  async function getCities(uf) {
    const response = await api.get(`get-cities-by-state/${uf}`);

    setCities(response.data[0].cities);
  }

  async function submitEmployee(e) {
    e.preventDefault();
    await createEmployee({
      name,
      birthDate,
      gender,
      state,
      city,
      role,
      salary,
    });
  }

  // async function submitEmployee(e) {
  //   e.preventDefault();

  //   setSuccess(false);
  //   setError(false);

  //   try {
  //     await api.post("/submit-employee", {
  //       name,
  //       birthDate: date,
  //       gender: gender,
  //       state,
  //       city,
  //       role: role,
  //       salary,
  //     });

  //     setSuccess(true);
  //   } catch (error) {
  //     console.log("Error => ", error);
  //     setError(true);
  //   }
  // }

  // HANDLE CHANGE - init
  function handleGenreChange(value) {
    console.log(`selected ${value}`);
    setGenre(value);
  }
  async function handleStateChange(value) {
    console.log(`selected ${value}`);
    setState(value);
    await getCities(value);
  }

  function handleCityChange(value) {
    console.log(`selected ${value}`);
    setCity(value);
  }

  function handleDateChange(dateStringValue) {
    console.log(`selected ${dateStringValue}`);
    setDate(dateStringValue);
  }
  return (
    <div className="container">
      <header className="App-header">
        <h1>Employee Registration</h1>
        <form>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="spaced-items">
            <input
              type="date"
              style={{ marginRight: "4px" }}
              onChange={(e) => handleDateChange(e.target.value)}
            />

            <select
              value={gender}
              onChange={(e) => handleGenreChange(e.target.value)}
            >
              <option value="" disabled selected>
                Select your gender
              </option>
              <option value="M">Masc</option>
              <option value="F">Fem</option>
            </select>
          </div>
          <select
            value={state}
            showSearch
            style={{ width: "100%" }}
            onChange={(e) => handleStateChange(e.target.value)}
          >
            <option value="" disabled selected>
              Select your UF
            </option>
            {ufs &&
              ufs.map((each) => <option value={each.uf}>{each.uf}</option>)}
          </select>

          <select
            value={city}
            showSearch
            style={{ width: "100%" }}
            onChange={(e) => handleCityChange(e.target.value)}
          >
            <option value="" disabled selected>
              Select your City
            </option>
            {cities &&
              cities.map((each) => <option value={each}>{each}</option>)}
          </select>

          <div>
            <input
              placeholder="Role"
              value={role}
              onChange={(event) => setJob(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Salary"
              value={salary}
              onChange={(event) => setSalary(event.target.value)}
            />
          </div>
        </form>
        <div>
          <button
            className="button"
            type="submit"
            onClick={(e) => submitEmployee(e)}
          >
            Send
          </button>
        </div>

        {success ? (
          <Alert
            style={{ marginTop: "12px" }}
            message="Success"
            description="Registration success!"
            type="success"
            showIcon
          />
        ) : (
          ""
        )}
        {error ? (
          <Alert
            style={{ marginTop: "12px" }}
            message="Error"
            description="An error occured on the registration, please try again!."
            type="error"
            showIcon
          />
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

const mapStateToProperties = (state) => {
  const { success } = state.employee;
  return { success };
};

const mapDispatchToProperties = (dispatch) => ({
  createEmployee: ({ name, birthDate, gender, state, city, role, salary }) =>
    dispatch(
      createEmployee({ name, birthDate, gender, state, city, role, salary })
    ),
});

export default connect(
  mapStateToProperties,
  mapDispatchToProperties
)(EmployeeForm);
