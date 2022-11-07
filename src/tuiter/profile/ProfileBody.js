import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faCalendar, faGlobe} from "@fortawesome/free-solid-svg-icons";

const ProfileBody = ({props}) => {
    return (
        <div className="mt-3 ms-3 d-flex flex-column">
            <div className="fw-bolder sixteen-px-font">{props.firstName} {props.lastName}</div>
            <div className="mt-0 pt-0 mb-2 lighter-text">{props.handle}</div>
            <div>{props.bio}</div>
            <div className="mt-2 mb-2 lighter-text d-flex flex-row justify-content-start">
                <div className="me-4 ">
                    <FontAwesomeIcon className="me-1" icon={faLocationDot}/>
                    {props.location}
                </div>
                <div className="me-4">
                    <FontAwesomeIcon className="me-1" icon={faGlobe}/>
                    {props.dob}
                </div>
                <div className="me-4">
                    <FontAwesomeIcon className="me-1" icon={faCalendar}/>
                    Joined {props.dateJoined}
                </div>
            </div>
            <div className="d-flex d-row lighter-text">
                <div className="d-flex d-row me-4">
                    <div className="text-black me-1 fw-bold">
                    {props.followingCount}
                    </div>
                    Following
                </div>
                <div className="d-flex d-row me-4">
                    <div className="text-black me-1 fw-bold">
                        {props.followersCount}
                    </div>
                    Followers
                </div>
            </div>
        </div>
    )
};

export default ProfileBody