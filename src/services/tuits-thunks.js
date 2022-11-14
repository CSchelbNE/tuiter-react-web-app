import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./tuit-services"


export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => {
        return await service.findTuits()
    }
)


export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })


export const createTuitThunk = createAsyncThunk(
    "tuits/createTuit",
    async (tuit) => {
        const resultingTuit = await service.createTuit(tuit);
        return resultingTuit;
    }
)


export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

