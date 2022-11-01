import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Dashboard/Home';

function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Dashboard></Dashboard>}>
    <Route index element={<Home/>}></Route>
    </Route>
   </Routes>
    </div>
  );
}

export default App;
