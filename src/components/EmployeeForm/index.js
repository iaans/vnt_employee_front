import React, { useState } from "react";
import "./style.css";
import FloatLabel from "./FloatLabel";

//import
const Employee = (props) => {
  const [firstName, setFirstName] = useState("Nikhil");

 function EmployeeForm() {
  return (
    <div className="container">
      <header className="App-header">
        <h3>Cadastro de funcionário </h3>
        <form>
          <div>
            <FloatLabel label="First Name" name="firstName" value={""}>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FloatLabel>
          </div>
          <div>
            <label for="birthDate">Birth Date: </label>
            <input type="date" id="date" />
            <label for="genre">
              {" "}
              Genre:
              <select name="sex">
                <option value="empty"> </option>
                <option value="F"> F</option>
                <option value="M"> M</option>
              </select>
            </label>
          </div>
          <div>
            <label for="state">State: </label>
            <select name="state">
              <option value="empty"> </option>
              <option value="PR">PR</option>
            </select>
          </div>
          <div>
            <label for="city">City: </label>
            <select name="city">
              <option value="empty"> </option>
              <option value="Pinhais">Pinhais</option>
            </select>
          </div>
          <div>
            <label for="Job">Job: </label>
            <input type="text" />
          </div>
          <div>
            <label for="salary">Salary: </label>
            <input type="salary" />
          </div>
        </form>
        <button type="button">Enviar</button>
      </header>
    </div>
  );
}
