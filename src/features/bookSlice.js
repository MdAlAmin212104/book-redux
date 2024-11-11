import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    books: {},
}

const bookSlices = createSlice({
    name: "books",
    initialState:,
    reducers: {
        addBook: (state, action) => {
            const { id, title, author, publicationYear } = action.payload
            state.books[id] = { title, author, publicationYear }
        },
        removeBook: (state, action) => {
            const { id } = action.payload
            delete state.books[id]
        },
        updateBook: (state, action) => {
            const { id, updatedFields } = action.payload
            Object.assign(state.books[id], updatedFields)
        },
    },
})

export default bookSlices.reducer;