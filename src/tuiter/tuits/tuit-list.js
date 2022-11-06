import tuits from "./tuits.json"
import {v4 as uuidv4} from "uuid";
import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitList = () => {
        const tuitsArray = useSelector((state) => state.tuits)
        return (
            <div className="list-group">
                {tuitsArray.map(tuit => <TuitItem key={uuidv4()} tuit={tuit}/>)}
            </div>
        )
}

export default TuitList