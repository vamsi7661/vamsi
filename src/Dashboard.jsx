import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Option1 from "./Option1";
const Dashboard = () => {
    const [ActiveTab,setTab]=useState({Tab:"option1"})
    const option1class=ActiveTab.Tab==="option1"&&"button-borders"
    const optio2class=ActiveTab.Tab==="option2"&&"button-borders"
  return (
    <div className="dashboard-container p-3">
      <h5>Dashboard</h5>
      <div><button className={`btn ${option1class}`} onClick={()=>{setTab({Tab:"option1"})}}>option1</button><button className={`btn ${optio2class}`} onClick={()=>{setTab({Tab:"option2"})}}>option2</button></div>
      <hr className="h4-line" />
{ActiveTab.Tab==="option1"?<Option1/>:<center><h1>Option2</h1></center>}
    </div>
  );
};
export default Dashboard;
