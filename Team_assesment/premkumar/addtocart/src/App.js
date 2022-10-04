import logo from './index.jpg';
import './App.css';
import Cart from './cart'
function App() {
  return (
    <div className="App">
      <img src={logo} ></img>
      <h3>Heritage milk (200ml)</h3>
      <Cart />
    </div>
  );
}

export default App;
