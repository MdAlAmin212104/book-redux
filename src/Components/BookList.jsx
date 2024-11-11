import { useSelector } from "react-redux";

const BookList = () => {
    const books = useSelector((state) => state.bookR.books.books);
    console.log(books);
    return (
        <div>
            <h1>List of books</h1>
           {books && books.length > 0 ?(
                <ul>
                    {books.map(book => 
                        <li key={book.id}>
                            {book.title} by {book.author} - ${book.price} - {book.quantity} pcs
                        </li>
                    )}
                </ul>
            ): 
            <p>No books found</p>
            }
        </div>
    );
};

export default BookList;