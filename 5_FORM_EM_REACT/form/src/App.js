import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Formularios no React</h2>
      <MyForm user={{name:"Carlos", email:"carlos@gmail.com"}} />
    </div>
  );
}

export default App;
