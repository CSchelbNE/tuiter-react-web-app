import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComment,
    faRefresh,
    faShareSquare,
    faThumbsDown,
    faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const setLike = () => {
        if (!tuit.liked) {
            const newTuit = (!tuit.disliked) ? {
                ...tuit,
                likes: tuit.likes + 1,
                liked: true,
            } :  {
                ...tuit,
                likes: tuit.likes + 1,
                liked: true,
                disliked: false,
                dislikes: tuit.dislikes -1
            }
            dispatch(updateTuitThunk(newTuit));
        } else {
            const newTuit = {
                ...tuit,
                likes: tuit.likes - 1,
                liked: false
            }
            dispatch(updateTuitThunk(newTuit));
        }
    }

    const setDislike   = () => {
        if (!tuit.disliked) {

            const newTuit =  (!tuit.liked) ? {
                ...tuit,
                dislikes: tuit.dislikes + 1,
                disliked: true
            } : {
                ...tuit,
                dislikes: tuit.dislikes + 1,
                disliked: true,
                likes: tuit.likes -1,
                liked: false
            }
            dispatch(updateTuitThunk(newTuit));
        } else {
            const newTuit = {
                ...tuit,
                dislikes: tuit.dislikes - 1,
                disliked: false
            }
            dispatch(updateTuitThunk(newTuit));
        }
    }

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
                    <a onClick={setLike} className="d-flex flex-row align-items-center text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faThumbsUp} style={{color: tuit.liked ? "green": ""}}
                                         className="me-2 home-lighter-text"/>
                        <div className="fourteen-px-font home-lighter-text">{tuit.likes}</div>
                    </a>
                </div>
                <div>
                    <a onClick={setDislike} className="d-flex flex-row align-items-center text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faThumbsDown} style={{color: tuit.disliked ? "red": ""}}
                                         className="me-2 home-lighter-text"/>
                        <div className="fourteen-px-font home-lighter-text">{tuit.dislikes}</div>
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