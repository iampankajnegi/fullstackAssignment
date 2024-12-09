
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonalDetailsForm from './components/user';
import ContactDetailsForm from './components/contactForm';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<PersonalDetailsForm />} />
            <Route path="/contact" element={<ContactDetailsForm />} />
        </Routes>
    </BrowserRouter>       
    </div>
  );
}

export default App;
