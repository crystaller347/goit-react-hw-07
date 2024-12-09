import { createSlice } from "@reduxjs/toolkit";
import contactsData from "../contactsData.json";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: contactsData,
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;