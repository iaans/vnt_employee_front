import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sidebar from "./components/Sidebar";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Routes from "./routes";

const antIcon = <LoadingOutlined style={{ fontSize: 42 }} spin />;

function App({ success, errors, loading }) {
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
      <div
        style={{
          marginRight: "33%",
        }}
      >
        <Routes />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          {loading ? <Spin indicator={antIcon} /> : ""}
        </div>
      </div>
    </div>
  );
}

const mapStateToProperties = (state) => {
  const { success, errors, loading } = state.feedback;

  return { success, errors, loading };
};

export default connect(mapStateToProperties)(App);
