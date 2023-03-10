import './App.css';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Nav />
     <h1>E-comm</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
