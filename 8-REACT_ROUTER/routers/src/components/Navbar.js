import "./Navbar.css"

//Importando o recurso Link
//Importando o recurso NavLink 
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    //Implementando a navegação entre paginas com a tag nav
    return <nav>
        {/*Utilizando o recurso Link como tag e informando o caminho da pagina para onde sera
        direcionado o usuário ao clicar*/}
     {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>*/}

      {/* 8 - Link Ativo */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      
      {/*Casos em que o projeto peça uma classe customizada*/}
      {/*<NavLink to="/" className={({isActive}) =>(isActive ? 'esta-ativo' : 'nao-ativado')}>Nome da Pagina</NavLink>*/}

    </nav>
  
}

export default Navbar

