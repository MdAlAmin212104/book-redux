import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    books: {
        books : [
            { id: 1, title: "Book 1", author: "Author 1", price: 23, quantity: 2000 },
            { id: 2, title: "Book 2", author: "Author 2", price: 123, quantity: 2001 },
            { id: 3, title: "Book 3", author: "Author 3", price: 323, quantity: 2002 },
        ]
    },
}

const bookSlices = createSlice({
    name: "books",
    initialState,
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