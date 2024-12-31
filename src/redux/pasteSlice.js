import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';

const initialState = {
    pastes:localStorage.getItem("pastes")
    ? JASON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
     const paste = action.payload
     state.pastes.push(paste);
     localStorage.setItem("Pastes",
     JSON.stringify(state.pastes));
     toast("Notes Created Successfuly")
    },

    updateToPaste: (state, action) => {
      const paste = action.payload
      const index = state.pastes.findIndex(() =>
      item._id === paste.id);

      if(index >= 0){
        state.pastes[index] = paste;
        localStorage.setItem("Pastes",
        JSON.stringify(state.pastes));
        toast.success("Notes Updated");
      }

    },

    resetAllPaste: (state, action) => {
      state.pastes= [];
      localStorage.removeItem("pastes");
    },

    removeFromPaste: (state, action) => {
      const pasteId = action.payload
      console.log(pasteId);
      const index = state.pastes.findIndex((item) =>
      item._id === pasteId);
      if(index >=0){
        state.pastes.splice(index,1);

        localStorage.setItem("Pastes",
        JSON.stringify(state.pastes));

        toast.success("Notes Deleted");
      }

      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste,removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer