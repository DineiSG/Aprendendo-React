
//importando o useParams
import { useParams } from "react-router-dom"

const Product = () => {

    //4 - Rota dinamica
    //Pegando o dado informado na tag Link da pagina Home
    const{id} = useParams()

  return (
    <>
      <p>ID do produto: {id}</p>
    </>
  )
}

export default Product
