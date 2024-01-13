
//importando o useParams
import { useParams } from "react-router-dom"

//importando o useFetch
import {useFetch} from "../hooks/useFetch"

const Product = () => {

    //4 - Rota dinamica
    //Pegando o dado informado na tag Link da pagina Home
    const{id} = useParams()


    //5 - Carregamento de dado individual
    //Definindo a URL  
    const url = "http://localhost:3000/products/" + id

    //Chamando as dependencias do hook e repassando à url
    const {data: product, loading, error} = useFetch(url)

    console.log(product)

  return (
    <>
      <p>ID do produto: {id}</p>

      {/*Definindo que ira aparecer uma mensagem de erro caso o produto nao exista no BD */}
      {error && <p>Ocorreu um erro ao procurar o produto...</p>}

      {/*Definindo mensagem de carregamento do produto */}
      {loading && <p>Carregando</p>}

      {/*Imprimindo o produto na tela*/}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
        </div>
      )}

      
    </>
  )
}

export default Product
