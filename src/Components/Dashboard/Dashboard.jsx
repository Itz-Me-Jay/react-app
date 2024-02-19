import React, { useEffect } from "react";

export default function Dashboard(props) {
  console.log("props", props);
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
    </div>
  );
}
