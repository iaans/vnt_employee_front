import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import EmployeeForm from "./components/EmployeeForm/index.js";
import EmployeeList from "./components/EmployeeList/index.js";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={EmployeeForm} />
        <Route path="/list-employee" component={EmployeeList} />
      </Switch>
    </BrowserRouter>
  );
}
