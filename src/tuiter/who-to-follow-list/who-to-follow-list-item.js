import React from "react";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WhoToFollowListItem = ({who}) => {
    console.log(who.who);
    return (
        <div>
            <li className="list-group-item p-1 ps-2">
                <div className="row">
                    <div className="col-2 d-flex align-items-center">
                        <img src={`../images/${who.avatarIcon}`} className="rounded-circle position-relative start-40"/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="d-flex flex-row align-items-center">
                                <span className="fw-bold">{who.userName}</span>
                                <FontAwesomeIcon icon={faCircleCheck} className={"ps-1 fourteen-px-font"}/>
                            </div>
                        </div>
                        <div className="row p-0">
                            <div className="wd-at-symbol-style">{"@" + who.handle}</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-4 p-0 d-flex align-items-center justify-content-center">
                        <button className="mt-1 mb-1 btn btn-primary smaller-font rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default WhoToFollowListItem;