import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './homepage';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
