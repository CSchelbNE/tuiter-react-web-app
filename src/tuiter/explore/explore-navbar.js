import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faGear} from "@fortawesome/free-solid-svg-icons";

const ExploreNavbar = () => {
    return (
        <div>
            <div className="row mb-2 d-flex flex-row align-items-center">
                <div className="d-flex align-items-center position-relative col-11">
                    <input placeholder="Search Tuiter" type="search" className="wd-search-bar flex-grow-1"/>
                    <FontAwesomeIcon icon={faSearch} className="wd-search"/>
                </div>
                <div className="col-1 d-none d-sm-block pe-sm-2">
                    <a href="#">
                        <FontAwesomeIcon icon={faGear} className="ps-0"/>
                    </a>
                </div>
             </div>
             <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-tabs mb-2">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">For you</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sports</a>
                            </li>
                            <li className="nav-item d-none d-sm-none d-md-block">
                                <a className="nav-link" href="#">Entertainment</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default ExploreNavbar
