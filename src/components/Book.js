import './styles/Book.css';

function Book() {
  return (
    <div className="all-books">
      <div>
        <p>Book</p>
        <h2>Governing the ungovernables</h2>
        <p>Dr . Ishrat Hussain</p>
        <p>
          <button type="submit">Edit</button>
          |
          <button type="submit">Remove</button>
          |
          <button type="submit">comment</button>
        </p>
      </div>
      <div>
        <p>completed</p>
      </div>
      <div>
        <p>Crrunt Chapter</p>
        <h3>Chapter 17</h3>
        <button type="submit">Updated Progress</button>
      </div>
    </div>
  );
}

export default Book;
