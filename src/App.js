import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<List/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
