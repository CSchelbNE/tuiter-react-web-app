import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComment,
    faEllipsisH,
    faHeart,
    faRefresh,
    faShareSquare
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";

const TuitStats = ({stats}) => {
    const unliked =
        <div>
            <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                <FontAwesomeIcon onClick={(e => changeLike(liked))} icon={faHeart}
                                 className="me-2 home-lighter-text"/>
                <div onClick={(e => changeLike(liked))} className="fourteen-px-font home-lighter-text">{stats.likes}</div>
            </a>
        </div>

    const liked =
        <div>
            <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                <FontAwesomeIcon onClick={(e => changeLike(unliked))} style={{color: "red "}}
                                 icon={faHeart} className="me-2 home-lighter-text"/>
                <div onClick={(e => changeLike(unliked))} className="fourteen-px-font home-lighter-text">{stats.likes}</div>
            </a>
        </div>

    const [isLiked,changeLike] = useState(stats.liked === true ? liked : unliked)
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
                {isLiked}
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