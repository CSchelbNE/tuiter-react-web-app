import * as tuitsDao from "../../tuits/tuits-dao.js"
import posts from "./tuits.js";
let tuits = posts;

const createTuit =  async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.createTuit(newTuit)
    res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const updates = req.body;
    console.log("THE VALUE IS" +updates._id)
    const status = await tuitsDao.updateTuit(updates._id, updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    console.log(tuitIdToDelete);
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
