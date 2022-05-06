import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Entry} from './page/entry/Entry'
import { DefaultLayout } from './layout/DefaultLayout';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path='/' element={<Entry />} />
        <Route path='/*' element={<DefaultLayout />}>
        </Route>
      </Routes> 
      </Router>
    </div>
  );
}

export default App;
