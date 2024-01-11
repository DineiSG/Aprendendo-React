
import {Link} from 'react-router-dom'

import { useFetch} from '../hooks/useFetch'

import './Home.css'

const Home = () => {
    //3 - Carregamento de dados

    //Chamando a url
    const url = "http://localhost:3000/products"
    
    //Chamando as depdencias exportadas pelo hook
    const{data: items, loading, error}=useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {/*Tratando o carregamento da página */}
      {loading && <p>Carregando dados...</p>}
      {/*Exibindo mensagem de erro para caso nao seja possivel carregar os dados*/}
      {error && <p>{error}</p>}
      <ul className='products'>
        {/*Listando os itens do BD*/}
        {items && items.map((item)=>(
        <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            
            {/*4 - Rota dinamica */}
            {/*Link que ira levar a detalhes do produto */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
            
        </li>))}
      </ul>
    </div>
  )
}

export default Home
