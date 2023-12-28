import logo from './logo.svg';
import './App.css';
import AccordionSection from './components/Accordion/Accordion';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/accordian" element={<AccordionSection />} />
      
     
    </Routes>                                                                                                                                               
   </Router>
    </>
  );
}

export default App;
