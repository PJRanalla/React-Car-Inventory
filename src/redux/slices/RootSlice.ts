import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        nickname: "Nickname",
        make: "Make",
        model: "Model",
        year: "Year",
        engine: "Engine",
        original_price: "Original Price",

    },
    reducers: {
        chooseNickname: (state, action) => { state.nickname = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseEngine: (state, action) => { state.engine = action.payload},
        choosePrice: (state, action) => { state.original_price = action.payload.oad},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseNickname, chooseMake, chooseModel, chooseYear, chooseEngine, choosePrice} = rootSlice.actions
