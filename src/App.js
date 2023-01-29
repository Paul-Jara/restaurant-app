import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import { Booking } from './pages/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Booking/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;