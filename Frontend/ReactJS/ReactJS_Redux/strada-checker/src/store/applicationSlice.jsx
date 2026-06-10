import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
    name: 'application',
    'initialState': {
        theme: 'dark',
        seed: 0
    },
    reducers: {
        switchTheme: (state) => {
            (state.theme === "dark") ? state.theme = 'light' : state.theme = 'dark';
        },
        changeSeed: (state) => {
            state.seed = Math.random();
        }
    }
})

export const {switchTheme, changeSeed} = applicationSlice.actions;
export default applicationSlice.reducer;