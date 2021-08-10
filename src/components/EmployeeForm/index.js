import React, { useState } from "react";
import FloatLabel from "../FloatLabel";
import "./style.css";
import { Button, DatePicker, Input, Select } from "antd";
import {} from "antd";
import "antd/dist/antd.css";
import api from "../../services/api";
//import { magenta } from "@ant-design/colors";

const { Option } = Select;

//import

// const dateFormat = "YYYY-MM-DD";

export default function EmployeeForm() {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [genre, setGenre] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [job, setJob] = useState();
  const [salary, setSalary] = useState();

  async function submitEmployee(e) {
    e.preventDefault();
    await api.post("/submit-employee", {
      name,
      birthDate: date,
      gender: genre,
      state,
      city,
      role: job,
      salary,
    });
  }

  console.log("Genre", genre);

  // HANDLE CHANGE - init
  function handleGenreChange(value) {
    console.log(`selected ${value}`);
    setGenre(value);
  }
  function handleStateChange(value) {
    console.log(`selected ${value}`);
    setState(value);
  }

  function handleCityChange(value) {
    console.log(`selected ${value}`);
    setCity(value);
  }

  function handleDateChange(date, dateString) {
    console.log(`selected ${dateString}`);
    setDate(dateString);
  }
  // HANDLE CHANGE - end

  //   element.style {
  //     display: flex;
  //     flex-wrap: wrap;
  //     align-content: space-between;
  // }

  return (
    <div className="container">
      <header className="App-header">
        <h1>Cadastro de funcionário </h1>
        <form>
          <div>
            <FloatLabel label="Name" name="name">
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FloatLabel>
          </div>

          <div>
            <FloatLabel name="date">
              <DatePicker
                style={{ width: "100%" }}
                onChange={(date, dateString) =>
                  handleDateChange(date, dateString)
                }
              />
            </FloatLabel>
          </div>
          <div>
            <FloatLabel label="Genre" name="gerne">
              <Select
                value={genre}
                showSearch
                style={{ width: "100%" }}
                onChange={handleGenreChange} // <<<
              >
                <Option value="M">Masc</Option>
                <Option value="F">Fem</Option>
              </Select>
            </FloatLabel>
          </div>

          <div>
            <FloatLabel label="State" name="state">
              <Select
                value={state}
                showSearch
                style={{ width: "100%" }}
                onChange={handleStateChange}
              >
                <Option value="PR">PR</Option>
                <Option value="SP">SP</Option>
                <Option valuce="SC">SC</Option>
              </Select>
            </FloatLabel>
          </div>
          <div>
            <FloatLabel label="City" name="city">
              <Select
                value={city}
                showSearch
                style={{ width: "100%" }}
                onChange={handleCityChange}
              >
                <Option value="Pinhais">Pinhais</Option>
                <Option value="Curitiba">Curitiba</Option>
                <Option value="Campinas">Campinas</Option>
                <Option value="Valinhos">Valinhos</Option>
                <Option value="Joinville">Joinville</Option>
                <Option value="Florianópolis">Florianópolis</Option>
              </Select>
            </FloatLabel>
          </div>
          <div>
            <FloatLabel label="Job" name="job">
              <Input
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </FloatLabel>
          </div>
          <div>
            <FloatLabel label="Salary" name="salary">
              <Input
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
              />
            </FloatLabel>
          </div>
        </form>
        <div>
          <Button
            type="submit"
            onClick={(e) => submitEmployee(e)}
            style={{ background: "#ED1B66" }}
          >
            Send
          </Button>
        </div>
      </header>
    </div>
  );
}
