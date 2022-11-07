import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {editProfile} from "../tuiter/reducers/profile-reducer";

const EditProfileFormControl = ({props}) => {
    const [name, setName] = React.useState(props.firstName + " " + props.lastName);
    const [bio, setBio] = React.useState(props.bio);
    const [location, setLocation] = React.useState(props.location);
    const [website, setWebsite] = React.useState(props.website);
    const [birthdate, setBirthdate] = React.useState(props.dob);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modifyUserProfile = () => {
        const [firstName, lastName] = name.split(" ");
        const newProfile = {
            "firstName" : firstName,
            "lastName": lastName === undefined ? "" : lastName,
            "bio": bio,
            "location" : location,
            "website" : website,
            "dob" : birthdate
        }

        dispatch(editProfile(newProfile));
        navigate("/tuiter/profile");
    }
    return (
        <div>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div style={{height: "40px"}} className="d-flex flex-row justify-content-start align-items-center">
                        <FontAwesomeIcon onClick={(() => navigate("/tuiter/profile"))} className="ms-4 me-5" icon={faX}/>
                        <div className="fw-bolder">
                            Edit Profile
                        </div>
                    </div>
                    <button onClick={modifyUserProfile} className="ps-3 bg-black text-white pt-0 pb-0 pe-3 fw-bold border-0 rounded-pill">Save</button>
                </div>
                <div className="d-flex flex-column justify-content-end">
                    <div className="mt-2 row position-relative" style={{height: "318px"}}>
                        <img style={{height: "250px"}} src={"../../images/" + props.bannerPicture}/>
                        <img className="position-absolute bottom-0 start-0 ms-4" style={{borderRadius: "50%", height: "160px", width: "180px"}} src={"../../images/" + props.profilePicture}/>
                        <button onClick={(()=> navigate("/tuiter/edit-profile"))} style={{width: "fit-content", borderColor: "lightgrey", fontSize: "14px"}} className="d-none">Edit Profile</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="form-control mt-4 d-flex flex-column">
                    <label htmlFor="inputname" className="fourteen-px-font lighter-text">Name</label>
                <input type="username" id="inputname" className="wd-remove-input-focus border-0 form-control-md"
                           value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="form-control mt-4 d-flex flex-column">
                    <label htmlFor="bio" className="fourteen-px-font lighter-text">Bio</label>
                    <textarea id="bio"
                           className="wd-remove-input-focus border-0 form-control-md"
                           value={bio} onChange={(event) => setBio(event.target.value)}/>
                </div>
                <div className="form-control mt-4 d-flex flex-column">
                    <label htmlFor="location" className="fourteen-px-font lighter-text">Location</label>
                    <input type="username" id="location"
                           className="wd-remove-input-focus border-0 form-control-md"
                           value={location} onChange={(event) => setLocation(event.target.value)}/>
                </div>
                <div className="form-control mt-4 d-flex flex-column">
                    <label htmlFor="website" className="fourteen-px-font lighter-text">Website</label>
                    <input type="username" id="website"
                           className="wd-remove-input-focus border-0 form-control-md"
                           value={website} onChange={(event) => setWebsite(event.target.value)}/>
                </div>
                <div className="form-control mt-4 d-flex flex-column">
                    <label className="fourteen-px-font lighter-text">Birth Date</label>
                    <input type="date" id="dob"
                           className="wd-remove-input-focus border-0 form-control-md"
                           value={birthdate} onChange={(event) => setBirthdate(event.target.value)}/>
                </div>
            </div>
        </div>
    )
};

export default EditProfileFormControl