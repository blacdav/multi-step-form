import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Submitted from './pages/Submitted';
import YourInfo from './pages/YourInfo';
import Selectplan from './pages/Selectplan';
import Addons from './pages/Addons';
import Summary from './pages/Summary';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' >
          <Route index element={<YourInfo />} />
          <Route path='select-plan' element={<Selectplan />} />
          <Route path='addons' element={<Addons />} />
          <Route path='summary' element={<Summary />} />
        </Route>
        <Route path='/submitted' element={<Submitted />} />
      </Routes>
    </div>
  );
}

export default App;
