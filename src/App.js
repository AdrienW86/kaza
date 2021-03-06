import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Fiche from './Pages/FicheLogement/Fiche';
import Propos from './Pages/Propos/Propos';
import NotFound from './Pages/NotFound/Notfound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/kaza/'    element= {<Home />} />
        <Route path='a-propos'  element= {<Propos />} />
        <Route path='fiche/:id' element= {<Fiche />} />
        <Route path='*'         element= {<NotFound />} />
      </Routes>      
    </div>
  );
}
export default App;
