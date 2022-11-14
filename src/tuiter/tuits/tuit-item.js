import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faX} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <div className="list-group-item">
            <div className="pt-2 d-flex flex-row justify-content-between row">
                <div className="d-flex flex-row">
                    <img className="rounded-corners-all-around me-2" src={"../../images/" + tuit.userIcon}/>
                    <div style={{width: "100%"}} className="d-flex flex-column">
                        <div className="d-flex fourteen-px-font flex-row align-items-center">
                            <a href="#" className="d-flex flex-row align-items-center text-decoration-none">
                                <div className="fw-bold text-black">{tuit.userName}</div>
                                <FontAwesomeIcon icon={faCircleCheck} className="ms-1 pe-1 smaller-font"/>
                                <div className="home-lighter-text">{tuit.handle} • {tuit.time}</div>
                            </a>
                        </div>
                        <div>
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit}/>
                    </div>
                    <div>
                        <a href="#" className="text-decoration-none">
                            <FontAwesomeIcon onClick={(() => deleteTuitHandler(tuit._id))} icon={faX} className="me-2 fourteen-px-font lighter-text"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TuitItem