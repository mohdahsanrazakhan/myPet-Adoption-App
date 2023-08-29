import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PetAdoption from './components/PetAdoption';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/petadoption" element={< PetAdoption />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
