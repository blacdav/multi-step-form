import { Routes, Route } from 'react-router-dom';
import YourInfo from './pages/YourInfo';
import Selectplan from './pages/Selectplan';
import Addons from './pages/Addons';
import Summary from './pages/Summary';
import Submitted from './pages/Submitted';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<YourInfo />} />
        <Route path='/select-plan' element={<Selectplan />} />
        <Route path='/add-ons' element={<Addons />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/submitted' element={<Submitted />} />
      </Routes>
    </div>
  );
}

export default App;
