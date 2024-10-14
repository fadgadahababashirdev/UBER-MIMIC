import { createSlice } from "@reduxjs/toolkit"; 

export const initialState = {
    name:"fadga"
} 
export const nameSlice = createSlice({
    name:"nameSlice" , 
    initialState , 
    reducers:{}
}) 


export default nameSlice.reducer