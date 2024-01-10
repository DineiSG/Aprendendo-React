import "./Navbar.css"

//Importando o recurso link 
import {Link} from "react-router-dom";

const Navbar = () => {
    //Implementando a navegação entre paginas com a tag nav
    return <nav>
        {/*Utilizando o recurso Link como tag e informando o caminho da pagina para onde sera
        direcionado o usuário ao clicar*/}
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  
}

export default Navbar

