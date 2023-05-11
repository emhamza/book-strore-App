import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Navigation from './components/Navigation';
import BookForm from './components/BookForm';

function App() {
  return (
    <>
      <div className="bookstore-cms">
        <Navigation />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/category" element={<p>Catergory Text or part gose there</p>} />
        </Routes>
        <BookForm />
      </div>
    </>
  );
}

export default App;
