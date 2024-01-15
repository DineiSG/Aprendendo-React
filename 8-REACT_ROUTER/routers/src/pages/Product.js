
//importando o useParams
import { useParams } from "react-router-dom"

import {useFetch} from "../hooks/useFetch"

const Product = () => {

 
  //4 - Rota dinamica
  //Pegando o dado informado na tag Link da pagina Home
  const{id} = useParams()
  
    const url= "http://localhost:3000/products/" +id
    
    const {data: product, loading, error} = useFetch(url)

    return (
      <>
        <p>ID do produto: {id}</p>
        {error && <p>Ocorreu algum erro</p>}
        {loading && <p>Carregando</p>}
        {product && (
         <div >
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
        </div>
        )}
      </>
    )
}

export default Product