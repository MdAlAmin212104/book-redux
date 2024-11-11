import { useDispatch } from "react-redux";
import { addBook } from "../features/bookSlice";

const AddBook = () => {
    const dispatch = useDispatch()

    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.name.value;
        const author = form.author.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const book = {
            id: Date.now(),
            title,
            author,
            price: parseInt(price),
            quantity: parseInt(quantity)
        }
        dispatch(addBook(book));
        
    }
    return (
        <div>
            <form onSubmit={handleAddBook} className="text-center mt-10 space-y-5">
                <div>

                <input type="text" name="name" placeholder="book Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>

                <input type="text" name="author" placeholder="book author name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>

                <input type="number" name="price" placeholder="price" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>

                <input type="number" name="quantity" placeholder="quantity" className="input input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddBook;