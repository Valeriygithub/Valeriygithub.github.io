import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import { Favorites } from './pages/Favorites/Favorites';
import { Random } from './pages/Random/Random';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Random />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;