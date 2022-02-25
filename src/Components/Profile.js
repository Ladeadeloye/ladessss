import React from "react";
import "../Profile.css";
import { SidebarData  } from "./SidebarData";
import spinner from "../Components/images/spinner.jpg"


function Profile() {
    return ( 
<div>
    <div className="sidebar">
        <ul className="sidebarList">
            {SidebarData.map((val,key)=>{
                return(
                    <li className="row" key={key}onClick={()=>{window.location.pathname= val.link}}>
                            <div id="icon">{val.icon}</div> <h6><div id="title">{val.title}</div></h6>
                        </li>
                );
            })}
        </ul>
    </div>    
    <div >
            <h2 className="content">Home</h2>
            <div className="accverification">
                <h7>Please complete your account verification</h7>
                <br></br>
                <h7>You won't be able to perform any transaction on Coinshare without completing your KYC verification.</h7>
                <p>Complete Verification</p>
                <h3>50%</h3>
            </div>
            <hr className="solid"/>
            <h3 className="welcome">Welcome, Augustine! <br></br>Let's get you started with CoinShare</h3>
            <h7 className="addMoney">Add money</h7>
            <h3 className="totalwallet">Total wallet</h3>
    </div>
</div>
     );
}

export default Profile;