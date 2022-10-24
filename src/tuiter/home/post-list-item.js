import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faChain, faRefresh, faHeart, faShareSquare, faEllipsisH, faCircleCheck} from "@fortawesome/free-solid-svg-icons";


const PostItem = ({post}) => {
    const contentTitle = post.contentTitle !== undefined ? post.contentTitle : "";
    const contentBody = post.contentBody !== undefined ? post.contentBody : "";
    const link = post.link !== undefined ? post.link : "";
    const postContentDiv = contentTitle !== "" && contentBody !== "" ?
                           (<a className="pt-2 pb-2 ps-3 pe-3
                            fourteen-px-font wd-central-content-desc col-12 text-decoration-none"
                               href="#">
                                <div className="fw-bold text-black">{contentTitle}</div>
                                <div className="lighter-text">{contentBody}</div>
                                <div className="d-flex flex-row align-items-center home-lighter-text">
                                    <FontAwesomeIcon icon={faChain} className="me-1"/>
                                    <div className="lighter-text">{link}</div>
                                </div>
                            </a>) : "";
    return (
            <div className="list-group-item">
                <div className="pt-2 d-flex flex-row justify-content-between row">
                    <div className="d-flex flex-row">
                        <img className="rounded-corners-all-around me-2" src={"../../images/" + post.userIcon}/>
                        <div className="d-flex flex-column">
                            <div className="d-flex fourteen-px-font flex-row align-items-center">
                                <a href="#" className="d-flex flex-row align-items-center text-decoration-none">
                                    <div className="fw-bold text-black">{post.userName}</div>
                                    <FontAwesomeIcon icon={faCircleCheck} className="ms-1 pe-1 smaller-font"/>
                                    <div className="home-lighter-text">{"@"+post.handle}</div>
                                </a>
                            </div> 
                            <div dangerouslySetInnerHTML={{__html: post.userPost}} className="fourteen-px-font">
                            </div>
                            <a href="#">
                                <img src={"../../images/"+post.image} className="mt-2 col-12 wd-central-content-img"/>
                            </a>
                            {postContentDiv}
                             <div className="wd-footer-icons p-2 d-flex flex-row justify-content-between">
                                <div>
                                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                                        <FontAwesomeIcon icon={faComment} className="me-2 home-lighter-text"/>
                                        <div className="fourteen-px-font home-lighter-text">{post.comments}</div>
                                    </a>
                                </div>
                                <div>
                                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                                        <FontAwesomeIcon icon={faRefresh} className="me-2 home-lighter-text"/>
                                        <div className="fourteen-px-font home-lighter-text">{post.retuits}</div>
                                    </a>
                                </div>
                                <div>
                                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#">
                                        <FontAwesomeIcon icon={faHeart} className="me-2 home-lighter-text"/>
                                         <div className="fourteen-px-font home-lighter-text">{post.hearts}</div>
                                    </a>
                                </div>
                                <div>
                                    <a className="d-flex flex-row align-items-center text-decoration-none" href="#" >
                                        <FontAwesomeIcon icon={faShareSquare} className="me-2 home-lighter-text"/>
                                    </a>
                                </div>
                            </div>
                                    </div>
                                    <a href="#" className="text-decoration-none">
                                        <FontAwesomeIcon icon={faEllipsisH} className="me-2 lighter-text"/>
                                    </a>
                                </div>
                            </div>
                    </div>
   );
}

export default PostItem
