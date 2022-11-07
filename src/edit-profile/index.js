import ProfileHeader from "../tuiter/profile/ProfileHeader";
import {useSelector} from "react-redux";
import EditProfileFormControl from "./edit-profile-form-control";

const EditProfileComponent = () => {
    const profile = useSelector((state => state.profile));
    return (
        <div>
            <EditProfileFormControl props={profile}/>
        </div>
    )
};

export default EditProfileComponent