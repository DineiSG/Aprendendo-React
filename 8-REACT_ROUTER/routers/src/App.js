import './App.css';

//1 Configurando o Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Importando as paginas
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      {/*----------Daqui pra cima tudo será exibido em todas as páginas-------------- */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      {/*-----------Daqui pra baixo tudo será exibido em todas as páginas------------- */}

      <footer>2023 - WS Info</footer>
    </div>
  );
}

export default App;
