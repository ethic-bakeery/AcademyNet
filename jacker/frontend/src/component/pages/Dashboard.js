import React from "react";

const Dashboard = () => {
  const username = localStorage.getItem("username");

  return <h1>Hello, {username}, welcome to the site</h1>;
};

export default Dashboard;
