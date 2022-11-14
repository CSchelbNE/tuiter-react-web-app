import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faRefresh,
    faShareSquare
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    // const increment = () => {
    //     changeLike(true);
    //     setStyle({color: "red"})
    //     setLikes(likes+1)
    // }
    // const decrement = () => {
    //     changeLike(false);
    //     console.log(isLiked)
    //     setStyle("")
    //     setLikes(likes-1)
    // }

    const dispatch = useDispatch();

    const [likes, setLikes] = useState(tuit.likes);
    const [isLiked,changeLike] = useState(tuit.liked === true);
    const [style, setStyle] = useState(tuit.liked === true ? {color: "red"} : "")
    return (
        <>
            <div className="wd-footer-icons p-2 d-flex flex-row justify-content-between">
                <div>
                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faComment} className="me-2 home-lighter-text"/>
                        <div className="fourteen-px-font home-lighter-text">{tuit.replies}</div>
                    </a>
                </div>
                <div>
                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faRefresh} className="me-2 home-lighter-text "/>
                        <div className="fourteen-px-font home-lighter-text">{tuit.retuits}</div>
                    </a>
                </div>
                <div>
                    <a onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                                                               }))} className="d-flex flex-row align-items-center text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faHeart} style={style}
                                         className="me-2 home-lighter-text"/>
                        <div className="fourteen-px-font home-lighter-text">{likes}</div>
                    </a>
                </div>
                <div>
                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#" >
                        <FontAwesomeIcon icon={faShareSquare} className="me-2 home-lighter-text"/>
                    </a>
                </div>
            </div>

        </>
    )
};


export default TuitStats