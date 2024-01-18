
//Importando o useSearch e o Link. O objetivo e redirecionar para a pagina do produto
import { useSearchParams, Link } from "react-router-dom"
//Importando o useFetch
import{useFetch} from "../hooks/useFetch"

const Search = () => {

    //Pegando o que esta no SearchParams
    const [SearchParams] = useSearchParams()
    
    //Extraindo os parametros de busca e criando uma nova URL
    const url = "http://localhost:3000/products?" + SearchParams
    const{data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Resultados disponiveis</h1>
      <ul className='products'>
        {/*Listando os itens do BD*/}
        {items && items.map((item)=>(
        <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
            
        </li>))}
      </ul>
    </div>
  )
}

export default Search

