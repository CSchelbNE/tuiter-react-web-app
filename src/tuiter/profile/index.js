import ProfileHeader from "./ProfileHeader";
import {useSelector} from "react-redux";
import ProfileBody from "./ProfileBody";

const ProfileComponent = () => {
    const profile = useSelector((state => state.profile));
    const isHidden = {...profile, "tf" : false}
    return (
        <div>
            <ProfileHeader  props={isHidden} />
            <ProfileBody props={profile}/>

        </div>
    )
};

export default ProfileComponent