import { createSlice } from "@reduxjs/toolkit"

const CategorySlice = createSlice({
    name:"categoty",
    initialState:
{
    category:"All"
},
reducers:{
    setCategory : (state,action) =>{
state.category =action.payload
    },
}
})
export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer