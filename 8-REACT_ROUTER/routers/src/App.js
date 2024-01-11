import './App.css';

//1 Configurando o Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Importando as paginas
import Home from './pages/Home'
import About from './pages/About'

//4 - Rota dinamica
import Product from './pages/Product';

//Importando o navbar
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      {/*----------Daqui pra cima tudo será exibido em todas as páginas-------------- */}
      <BrowserRouter>
      {/*Importando o componente Navbar. Por se tratar de um componente do React Router devemos 
      coloca-lo dentro do Browser Router */}
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

          {/*4 - Rota dinamica */}
          <Route path='/products/:id' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
      {/*-----------Daqui pra baixo tudo será exibido em todas as páginas------------- */}

      <footer>2023 - WS Info</footer>
    </div>
  );
}

export default App;
