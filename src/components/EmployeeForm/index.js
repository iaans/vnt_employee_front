import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import "antd/dist/antd.css";

import {
  createEmployee,
  updateEmployee,
  setCreateUpdateEmployeeSuccess,
} from "../../store/actions/employee.js";
import { getCities, getUfs } from "../../store/actions/location.js";

function EmployeeForm({
  createEmployee,
  getCities,
  getUfs,
  updateEmployee,
  setCreateUpdateEmployeeSuccess,
  cities,
  ufs,
  updatingEmployee,
  success,
}) {
  const [name, setName] = useState();
  const [birthDate, setDate] = useState();
  const [gender, setGender] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [role, setJob] = useState();
  const [salary, setSalary] = useState();

  useEffect(() => {
    getUfs();
  }, []);

  useEffect(() => {
    async function fetchCities(uf) {
      // You can await here
      await getCities(uf);
    }

    if (updatingEmployee._id) {
      setState(updatingEmployee.state);

      fetchCities(updatingEmployee.state);

      setName(updatingEmployee.name);
      setDate(updatingEmployee.birthDate);
      console.log(updatingEmployee);
      setGender(updatingEmployee.gender);
      setJob(updatingEmployee.role);
      setSalary(updatingEmployee.salary);
      setCity(updatingEmployee.city);
    }
  }, [updatingEmployee]);

  useEffect(() => {
    if (success) {
      setName("");
      setDate(null);
      setGender("");
      setState("");
      setCity("");
      setJob("");
      setSalary(0);

      setCreateUpdateEmployeeSuccess(false);
    }
  }, [success]);

  async function submitEmployee(e) {
    e.preventDefault();
    if (updatingEmployee?._id) {
      await updateEmployee({
        _id: updatingEmployee._id,
        name,
        gender,
        state,
        city,
        role,
        salary,
      });
    } else {
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
  }

  // HANDLE CHANGE - init
  function handleGenderChange(value) {
    setGender(value);
  }
  async function handleStateChange(value) {
    setState(value);
    await getCities(value);
  }

  function handleCityChange(value) {
    setCity(value);
  }

  function handleDateChange(dateStringValue) {
    console.log(`selected DATE =>> ${dateStringValue}`);
    setDate(dateStringValue);
  }
  return (
    <div className="container">
      <header className="App-header">
        {updatingEmployee?._id ? (
          <h1>Employee Update</h1>
        ) : (
          <h1>Employee Registration</h1>
        )}
        <form>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="spaced-items">
            {!updatingEmployee?._id ? (
              <input
                type="date"
                value={birthDate}
                style={{ marginRight: "4px" }}
                onChange={(e) => handleDateChange(e.target.value)}
              />
            ) : (
              ""
            )}

            <select
              value={gender}
              onChange={(e) => handleGenderChange(e.target.value)}
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
              type="number"
              min="1"
              max="1000000"
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
      </header>
    </div>
  );
}

const mapStateToProperties = (state) => {
  const { updatingEmployee } = state.employee;
  const { cities, ufs } = state.location;
  const { success } = state.feedback;

  return { updatingEmployee, cities, ufs, success };
};

const mapDispatchToProperties = (dispatch) => ({
  createEmployee: ({ name, birthDate, gender, state, city, role, salary }) =>
    dispatch(
      createEmployee({ name, birthDate, gender, state, city, role, salary })
    ),
  getCities: (uf) => {
    dispatch(getCities(uf));
  },
  getUfs: () => {
    dispatch(getUfs());
  },
  updateEmployee: ({ _id, name, gender, state, city, role, salary }) => {
    dispatch(updateEmployee({ _id, name, gender, state, city, role, salary }));
  },
  setCreateUpdateEmployeeSuccess: (status) => {
    setCreateUpdateEmployeeSuccess(status);
  },
});

export default connect(
  mapStateToProperties,
  mapDispatchToProperties
)(EmployeeForm);
