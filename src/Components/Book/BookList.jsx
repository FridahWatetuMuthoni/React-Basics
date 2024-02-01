import Book from "./Book";
import curious_img from "../../assets/images/curious-minds.jpg";
import lies_img from "../../assets/images/first-lie-wins.jpg";
import atomic_img from "../../assets/images/atomic-habits.jpg";
import "./Book.css";

const data = [
  {
    image_url: curious_img,
    title: "Interesting facts about curious minds",
    author: "Jordan Moore",
  },
  {
    image_url: lies_img,
    title: "First Lie Wins",
    author: "Ashley Elston",
  },
  {
    image_url: atomic_img,
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    image_url: atomic_img,
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    image_url: lies_img,
    title: "First Lie Wins",
    author: "Ashley Elston",
  },
  {
    image_url: curious_img,
    title: "Interesting facts about curious minds",
    author: "Jordan Moore",
  },
];

function BookList() {
  return (
    <section className="row justify-content-center py-3 shadow-lg">
      {data.map((book) => {
        return (
          <section
            key={book.title}
            className="col-lg-3 col-md-4 m-2 book-card shadow-sm p-0 "
          >
            <Book book={book} />
          </section>
        );
      })}
    </section>
  );
}

export default BookList;
