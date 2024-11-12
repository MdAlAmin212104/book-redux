import { useDispatch, useSelector } from "react-redux";
import { removeBook } from '../features/bookSlice';

const BookList = () => {
    const books = useSelector((state) => state.bookR.books.books);
    const dispatch = useDispatch();


    const handleDeleteBook = (id) => {
        dispatch(removeBook(id));
    };
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">List of books</h1>
           {books && books.length > 0 ?(
                <ul className="text-center space-y-10">
                    {books.map(book => 
                        <li className="text-2xl font-bold" key={book.id}>
                            {book.title} by {book.author} - ${book.price} - {book.quantity} pcs 
                            
                            <button 
                                className="btn btn-error ml-6"
                                onClick={() => handleDeleteBook(book.id)}
                            >Delete</button>
                            
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