import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    paste:localStorage.getItem("pastes")
    ? JASON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
     
      
    },
    updateToPaste: (state, action) => {
      

    },
    resetAllPaste: (state, action) => {
      

    },
    removeFromPaste: (state, action) => {
      
        
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste,removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer