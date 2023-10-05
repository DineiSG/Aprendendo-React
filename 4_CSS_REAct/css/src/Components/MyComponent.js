/*Deve-se importar o arquivo CSS do componente */
import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
      {/*Para estilizar specificamente o componente e evitar que o CSS vaze, por assim dizer */}
      {/*Deve-se utilizar o recurso de className e declarar essa classe no arquivo CSS correspondente ao Componente */}
      <p className="my-comp-paragraph">Este paragrafo pertence ao componente</p>
    </div>
  )
}

export default MyComponent
