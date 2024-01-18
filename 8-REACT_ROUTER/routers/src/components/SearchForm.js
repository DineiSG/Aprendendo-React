
// Pegando a busca do usuario e redirecionando para a pagina de busca com o useNavigate
import { useNavigate } from "react-router-dom"
//Pegando o estado do input
import { useState } from "react"

const SearchForm = () => {
    const navigate = useNavigate()
    
    //Realizando a busca. Manipulando o estado e utilizando o valor dele pra pegar a busca 
    const [query, setQuery] = useState()
    
    //Logica do input
    const handleSubmit = (e) =>{
        e.preventDefault()

        navigate("/search?q=" + query)
    }
    //Formulario de pesquisa
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" value="buscar" />
    </form>
  )
}

export default SearchForm


