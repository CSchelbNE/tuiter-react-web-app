import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faRefresh,
    faShareSquare
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";

const TuitStats = ({stats}) => {
    const increment = () => {
        changeLike(true);
        setStyle({color: "red"})
        setLikes(likes+1)
    }
    const decrement = () => {
        changeLike(false);
        console.log(isLiked)
        setStyle("")
        setLikes(likes-1)
    }

    const [likes, setLikes] = useState(stats.likes);
    const [isLiked,changeLike] = useState(stats.liked === true);
    const [style, setStyle] = useState(stats.liked === true ? {color: "red"} : "")
    return (
        <>
            <div className="wd-footer-icons p-2 d-flex flex-row justify-content-between">
                <div>
                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faComment} className="me-2 home-lighter-text"/>
                        <div className="fourteen-px-font home-lighter-text">{stats.replies}</div>
                    </a>
                </div>
                <div>
                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faRefresh} className="me-2 home-lighter-text "/>
                        <div className="fourteen-px-font home-lighter-text">{stats.retuits}</div>
                    </a>
                </div>
                <div>
                    <a onClick={isLiked ? decrement : increment} className="d-flex flex-row align-items-center text-decoration-none" href="#">
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