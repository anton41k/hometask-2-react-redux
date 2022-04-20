import { createSlice } from "@reduxjs/toolkit";

import initialNotes from "../data.json";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: initialNotes,
    isArchived: false,
  },
  reducers: {
    addNote(state, { payload }) {
      state.notes = [payload, ...state.notes];
    },
    removeNote(state, { payload }) {
      state.notes = state.notes.filter(({ id }) => id !== payload);
    },
    toggleNoteArchived(state, { payload }) {
      const note = state.notes.find(({ id }) => id === payload);
      note.archived = !note.archived;
    },
    editNoteArchived(state, { payload }) {
      const note = state.notes.find(({ id }) => id === payload.id);
      note.name = payload.name;
      note.content = payload.content;
      note.category = payload.category;
    },
    toggleNotesIsArchived(state, { payload }) {
      state.isArchived = !state.isArchived;
    },
  },
});

export const {
  addNote,
  removeNote,
  toggleNoteArchived,
  editNoteArchived,
  toggleNotesIsArchived,
} = noteSlice.actions;

export default noteSlice.reducer;
