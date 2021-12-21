import './App.css';
import{ Routes, Route } from 'react-router-dom';


import Books from './components/Books';
import BookAdd from './components/BookAdd';
import BookEdit from './components/BookEdit';
import BookView from './components/BookView';


function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/editBook' element={<BookEdit />} />
        <Route path='/viewBook' element={<BookView />} />
        <Route path='/addBook' element={<BookAdd />} />
      </Routes>
      
    </div>
  );
}

export default App;
