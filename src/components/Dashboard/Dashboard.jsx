import React from "react";
import Sidebar from '../Dashboard/Components/SideBar Section/SideBar'
import Body from '../Dashboard/Components/Body Section/Body'

function Dashboard() {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar />
                <Body />
            </div>
        </div>
    );
} 
   
export default Dashboard;