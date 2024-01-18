
//importando o useParams
import { Link, useParams } from "react-router-dom"

import {useFetch} from "../hooks/useFetch"

const Product = () => {
 
  //4 - Rota dinamica
  //Pegando o dado informado na tag Link da pagina Home
  const{id} = useParams()

    const url="http://localhost:3001/products" +id
    
    const {data: product, loading, error} = useFetch(url)

    return (
      <>
        <p>ID do produto: {id}</p>
        {error && <p>Ocorreu algum erro</p>}
        {loading && <p>Carregando</p>}
        {product && (
         <div >
          <h1 >{product.name}</h1>
          <p>R$ {product.price}</p>

          {/*6 - Nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais Informações</Link>

        </div>
        )}
      </>
    )
}

export default Product