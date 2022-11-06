import React from "react";
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <div className="mb-1" style={{fontSize:"24px", fontWeight: "bold"}}>Home</div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}

export default HomeComponent