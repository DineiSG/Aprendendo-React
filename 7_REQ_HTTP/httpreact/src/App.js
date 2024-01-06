
/*Importando o useState e o useEffect */
import {useState, useEffect} from "react";
import './App.css';

// 4-Custom hook
//Importando o hook
import {useFetch} from "./hooks/useFetch"  

//Declarando a url base da API;
const url = "http://localhost:3000/products"


function App() {

  //4 - Custom hook: imformando o que sera importado e de onde sera importado
  //5 - Refatorando o POST
  //6 - Loading 
  //7 - Tratando erros
  // Deletando dados
  const {data: items, httpConfig, loading, error}=useFetch(url)

  /*Salvando os dados. o products vai salvar os dados e o setProducts vai 
  auxiliar a colocar os produtos em algum lugar */
  //const [products, setProducts] = useState([])

  /*Criando os states dos campos do formulario que deverão ser preenchidos*/
  const [name,setName]=useState("")
  const[price,setPrice]=useState("")

  // 1 - Resgatando dados por meio de uma chamada assíncrona utilizando o useEffect
 // useEffect(() =>{
  //  async function fetchData(){
       // Solicitando uma resposta da requisição
      //  const res = await fetch(url)
      // Transformando o Json em Objeto
       // const data=await res.json()
       // setProducts(data)
       // return (data)
  //  }
    //fetchData()    
  //},[])

  //2 - Adicionando produtos
  const handleSubmit = async(e) =>{
    e.preventDefault();

    const product = {
      /*Como os states possuem os mesmos nomes das chaves do objeto
      podem ser informados de forma resumida. Caso contrario deveriam ser informados 
      de forma composta como: name: nome, por exemplo */
      name, 
      price,
    }
    //const res = await fetch (url, {
      /*Informando o método e o tipo de dado enviado */
      //method: "POST",
      //headers:{
       // "Content-Type" : "application/json"
      //},
      /*Enviando o body convertido em JSON */
      //body: JSON.stringify(product),
    //})

    //3Carregamento dinamico apos envio de dados para o BD
    
    //Transformando o dado do formato JSON que vem do BD em um objeto
    //const addedProduct = await res.json();

    //Adicionando o produto à lista no front 
    //setProducts ((prevProducts)=>[...prevProducts, addedProduct]);

    //5 - refatorando o POST
    // Configurando o Delete
    httpConfig(product, "POST")


    
    //Limpando os states apos envio dos dados ao BD 
    setName("")
    setPrice("")

    

  }

    //Função para Deletar o item
    const handleRemove = (id) =>{
      httpConfig(id, "DELETE")
    }
  

  return (
    <div className="App">
      {/*Imprimindo todos os dados dos produtos no template */}
      <h1>Lista de Produtos</h1>
      {/* 6 - Loding - Informando que a aplicação esta buscando os dados no BD */}
      {loading && <p>Carregando dados...</p>}
      {/*Condicionando a apresentação da lista de produtos ao fim da busca no BD. 
      Caso a busca tenha sido concluida e nao haja nada mais para ser carregado, nao sera mais apresentada
      a mensagem "Carregando dados..." */}

      {/*7 - Tratando erros */}
      {/*Se ocorrer algum erro, a mensagem inserida no hook sera exibida */}
      {error && <p>{error}</p>}
      {/*Caso ocorrer algum erro ao carregar a lista, ela nao sera exibida, 
      apenas a mensagem de erro */}
      {!error &&(
          <ul>
            {/*Validando o tipo de item que sera apresentado no front*/}
            {/*Adicionando o botao de excluir aos itens */}
            {items && items.map((product)=>(
              <li key={product.id}>{product.name} - R$ {product.price} <button onClick={() =>handleRemove(product.id)}>Excluir</button></li>
            ))}
          </ul>
      )}

      {/*Criando o formulario para envio dos dados para o BD */}
      <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name="name" onChange={(e) =>setName(e.target.value)}/>
            </label>
            <label>
              Preço:
              <input type="text" value={price} name="price" onChange={(e) =>setPrice(e.target.value)}/>
            </label>
            
            {/* 7 - State de loading no POST */}
            {/*Desabilitando o botao enquanto o request e finalizado */}
            {loading && <input type="submit" disabled value="Aguarde"/>}
            {/*Sumindo com o botão enquanto o request e finalizado */}
            {!loading && <input type="submit" value="Criar"/>}

          </form>
      </div>

    </div>
    

  );
}

export default App;
