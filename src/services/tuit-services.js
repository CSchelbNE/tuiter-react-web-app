import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

// const TUITS_API = "https://tuiter-node-server-app-cschelb.herokuapp.com/api/tuits";
console.log(TUITS_API)


export const findTuits = async () => {
    const response = await axios.get(TUITS_API)
    return response.data;
}

export const createTuit = async (tuit) => {
     const response = await axios.post(TUITS_API, tuit);
     return response.data;
}

export const deleteTuit = async (tid) => {
    console.log(tid);
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const api_route = TUITS_API + "/" + tuit._id;
    console.log(tuit);
    const response = await axios
        .put(api_route, tuit);
    return response;
}

