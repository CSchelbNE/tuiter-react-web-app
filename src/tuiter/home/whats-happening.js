import React, {useState} from "react";
import {faSignal, faImage, faFaceSmile, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {createTuit} from "../reducers/tuit-reducer";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit))
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="../../images/nasa.jpg" className="rounded-corners-all-around bg-white" width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0 mb-2"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <FontAwesomeIcon icon={faImage} className="me-3"/>
                        <i className="bi bi-filetype-gif me-3"/>
                        <FontAwesomeIcon className="me-3" icon={faSignal}/>
                        <FontAwesomeIcon icon={faFaceSmile} className="me-3"/>
                        <FontAwesomeIcon icon={faLocationDot} className="me-3"/>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;