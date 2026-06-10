import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
    name: 'application',
    'initialState': {
        theme: 'dark'
    },
    reducers: {
        switchTheme: (state) => {
            console.log('asd');
            (state.theme === "dark") ? state.theme = 'light' : state.theme = 'dark';
        }
    }
})

export const {switchTheme} = applicationSlice.actions;
export default applicationSlice.reducer;