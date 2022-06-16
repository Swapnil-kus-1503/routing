import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AllRoutes from './pages/AllRoutes';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
