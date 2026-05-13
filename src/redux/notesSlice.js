import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',

    initialState: {
        notes: [],
    },

    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
    },
});

export const { setNotes } = notesSlice.actions;

export default notesSlice.reducer;