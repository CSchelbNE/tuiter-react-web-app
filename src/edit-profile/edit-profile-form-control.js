import React from "react";


const EditProfileFormControl = ({props}) => {
    const [name, setName] = React.useState(props.firstName + " " + props.lastName);
    const [bio, setBio] = React.useState(props.bio);
    const [location, setLocation] = React.useState(props.location);
    const [website, setWebsite] = React.useState(props.website);
    const [birthdate, setBirthdate] = React.useState(props.dob);
    console.log(birthdate)

    return (
        <div>
            <div className="form-control mt-4 d-flex flex-column">
                <label for="inputname" className="fourteen-px-font lighter-text">Name</label>
            <input type="username" id="inputname" className="wd-remove-input-focus border-0 form-control-md"
                       value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="form-control mt-4 d-flex flex-column">
                <label htmlFor="inputname" className="fourteen-px-font lighter-text">Bio</label>
                <textarea id="inputname"
                       className="wd-remove-input-focus border-0 form-control-md"
                       value={bio} onChange={(event) => setBio(event.target.value)}/>
            </div>
            <div className="form-control mt-4 d-flex flex-column">
                <label htmlFor="inputname" className="fourteen-px-font lighter-text">Location</label>
                <input type="username" id="inputname"
                       className="wd-remove-input-focus border-0 form-control-md"
                       value={location} onChange={(event) => setLocation(event.target.value)}/>
            </div>
            <div className="form-control mt-4 d-flex flex-column">
                <label htmlFor="inputname" className="fourteen-px-font lighter-text">Website</label>
                <input type="username" id="inputname"
                       className="wd-remove-input-focus border-0 form-control-md"
                       value={website} onChange={(event) => setWebsite(event.target.value)}/>
            </div>
            <div className="form-control mt-4 d-flex flex-column">
                <label htmlFor="inputname" className="fourteen-px-font lighter-text">Birth Date</label>
                <input type="date" id="inputname"
                       className="wd-remove-input-focus border-0 form-control-md"
                       value={birthdate} onChange={(event) => setBirthdate(event.target.value)}/>
            </div>

        </div>
    )
};

export default EditProfileFormControl