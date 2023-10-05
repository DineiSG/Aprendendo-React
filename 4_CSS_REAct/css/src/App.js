import './App.css';
import MyComponent from './Components/MyComponent';

/*Importando o componente Title */
import Title from './Components/Title';

function App() {
  /*Criando uma variavel para ser usada na condicional do CSS Dinamico */
  const n=15;
  
  /*Criando uma variavel para ser utilizada no CSS de classes dinamicas*/
  const redTitle=true


  return (
    <div className="App">
      {/* CSS global */}
      <h1>Olá Mundo</h1>
      {/*CSS de Componente */}
      <MyComponent/>
      
      {/*CSS inline dinamico*/}
      {/*Aplicando um estilo utilizando uma condicional. Isso fara com que o CSS 
      fique dinâmico*/}
      <h2 style={n>10?{color:"red"}:{color:"blue"}}>Consegui </h2>
      
      {/*Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo possui classe dinamica
      </h2>

      {/*CSS Modules */}
      <Title />

      
    </div>
  );
}

export default App;
