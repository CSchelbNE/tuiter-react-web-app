import {v4 as uuidv4} from "uuid";
import React, {useState} from "react";
import {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
        // const tuitsArray = useSelector((state) => state.tuits)
        const dispatch = useDispatch();

        const {tuits, loading} = useSelector(
            state => state.tuitsData
        )
        const [wasClicked, setClicked] = useState(false);
        const clickCallback = () => {
            setClicked(!wasClicked);
        }
        useEffect(() => {
            dispatch(findTuitsThunk())
        }, [wasClicked])
    return (
            <div className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {tuits.map(tuit => <TuitItem key={uuidv4()} tuit={{...tuit, callback: clickCallback}}/>)}
            </div>
        )
}

export default TuitList