import * as tuitsDao from "../../tuits/tuits-dao.js"




const createTuit =  async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.createTuit(newTuit)
    res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
    try{
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
    } catch (err) {
        res.sendStatus(503);
    }
}
const updateTuit = async (req, res) => {
    const updates = req.body;
    const status = await tuitsDao.updateTuit(updates._id, updates);
    res.json(updates);
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

