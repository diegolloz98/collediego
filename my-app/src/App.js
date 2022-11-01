import './App.css';
import CompHome from './components/compHome/CompHome';
import { BrowserRouter as Router, Route, Routes } 
from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<CompHome/>}/>
          <Route exact path="/es" element={<CompHome/>}/>
        </Routes>
    </Router>
  );
}

export default App;
