import PropTypes from "prop-types";
import "./Book.css";

function Book(props) {
  const { image_url, title, author } = props.book;
  console.log(props.book);

  return (
    <>
      <div className="image-wrapper pt-2">
        <img src={image_url} alt="book image" />
      </div>
      <div className="card-body p-3 text-center">
        <h4 className="card-text fw-normal my-3">{title}</h4>
        <h5 className="card-text fw-normal">{author}</h5>
      </div>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.object,
  image_url: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
