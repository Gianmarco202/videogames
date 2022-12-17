import './App.css';
import SearchBar from './componentes/SearchBar';
import Home from './vistas/Home';
import Form from './componentes/Form';
import Order from './componentes/Order';

function App() {
  return (
    <div>
      <Form></Form>
      <SearchBar/>
      <Order></Order>
      <Home/>
    </div>
  );
}

export default App;
