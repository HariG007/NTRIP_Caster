import { Router } from 'react-router-dom';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import UserDetails from './Component/UserDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Dashboard/>}/>
      <Route exact path='/userdetails' element={<UserDetails/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
