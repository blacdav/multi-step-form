import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Submitted from './pages/Submitted';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/submitted' element={<Submitted />} />
      </Routes>
    </div>
  );
}

export default App;
