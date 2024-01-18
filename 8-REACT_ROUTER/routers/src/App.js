import './App.css';

//1 Configurando o Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//4 - Rota dinamica
import Product from './pages/Product';

//Importando as paginas
import Home from './pages/Home'
import About from './pages/About'

//importando a pagina Search
import Search from './pages/Search';



//Importando o navbar
import Navbar from './components/Navbar';

//Importando o Info
import Info from './pages/Info';

//Importando o NotFound
import NotFound from './pages/NotFound';

//Importando o Search Form
import SearchForm from './components/SearchForm';



function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      {/*----------Daqui pra cima tudo será exibido em todas as páginas-------------- */}
      <BrowserRouter>
      {/*Importando o componente Navbar. Por se tratar de um componente do React Router devemos 
      coloca-lo dentro do Browser Router */}
      <Navbar/>
      {/* 9 - Search */}
      <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

          {/*4 - Rota dinamica */}
          <Route path='/products/:id' element={<Product/>}/>

          {/* Nested Route*/}
          <Route path='/products/:id/info' element={<Info/>}></Route>

          {/*9 - Rota do Search  */}
          <Route path="/search" element={<Search/>} />
          

          <Route path="/company" element={<Navigate to="/About"/>}/>
          
            
          {/*7 - No Match Route (Pagina 404) */}
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </BrowserRouter>
      {/*-----------Daqui pra baixo tudo será exibido em todas as páginas------------- */}

      <footer>2023 - WS Info</footer>
    </div>
  );
}

export default App;
