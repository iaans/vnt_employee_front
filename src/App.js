import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sidebar from "./components/Sidebar";
import { message } from "antd";

import Routes from "./routes";

function App({ success, errors }) {
  useEffect(() => {
    if (errors && errors.length > 0) {
      errors.map((error) => {
        message.error(error.msg);
      });
    }
  }, [errors]);

  useEffect(() => {
    success && message.success(success);
  }, [success]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Sidebar />
      <div style={{ marginRight: "33%" }}>
        <Routes />
      </div>
    </div>
  );
}

const mapStateToProperties = (state) => {
  const { success, errors } = state.feedback;

  return { success, errors };
};

export default connect(mapStateToProperties)(App);
