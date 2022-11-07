import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faX} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router";

const ProfileHeader = ({props}) => {
    const navigate = useNavigate();
    const hiddenEditButton = props.tf ? "d-none fw-bold rounded-pill ps-3 pe-3 pt-1 pb-1 position-absolute wd-profile-button-abs" :
                             "fw-bold rounded-pill ps-3 pe-3 pt-1 pb-1 position-absolute wd-profile-button-abs";
    const isBackArrow = props.tf ?
                        <div className="d-flex justify-content-between">
                            <div style={{height: "40px"}} className="d-flex flex-row justify-content-start align-items-center">
                                <FontAwesomeIcon onClick={(() => navigate("/tuiter/profile"))} className="ms-4 me-5" icon={faX}/>
                                <div className="fw-bolder">
                                    Edit Profile
                                </div>
                            </div>
                            <button className="ps-3 bg-black text-white pt-0 pb-0 pe-3 fw-bold border-0 rounded-pill">Save</button>
                        </div>
                                 :
                        <div style={{height: "40px"}} className="d-flex flex-row justify-content-start align-items-center">
                            <FontAwesomeIcon onClick={(() => navigate("/tuiter/home"))} className="ms-4 me-5" icon={faArrowLeft}/>
                            <div className="d-flex flex-column">
                                <div className="text-black fw-bolder">
                                    {props.firstName} {props.lastName}
                                </div>
                                <div className="lighter-text fourteen-px-font">
                                    {props.tuitCount} Tuits
                                </div>
                            </div>
                        </div>

    return(
        <div className="d-flex flex-column">
            {isBackArrow}
            <div className="d-flex flex-column justify-content-end">
                <div className="mt-2 row position-relative" style={{height: "318px"}}>
                    <img style={{height: "250px"}} src={"../../images/" + props.bannerPicture}/>
                    <img className="position-absolute bottom-0 start-0 ms-4" style={{borderRadius: "50%", height: "160px", width: "180px"}} src={"../../images/" + props.profilePicture}/>
                    <button onClick={(()=> navigate("/tuiter/edit-profile"))} style={{width: "fit-content", borderColor: "lightgrey", fontSize: "14px"}} className={hiddenEditButton}>Edit Profile</button>
                </div>
            </div>
        </div>
    )
};

export default ProfileHeader