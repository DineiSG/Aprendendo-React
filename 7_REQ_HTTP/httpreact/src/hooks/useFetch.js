
//Importando o use state e o useEffect
import { useState, useEffect } from "react";

//4-Custom hook
//Exportando a função. Para isso recebemos a url da api, o endpoint 
// para puxar o dado que iremos necessitar
export const useFetch = (url) => {
    //Informando que serao recebidos dados da API
    const [data, setData]= useState(null)

    //Criando um request que invocara a requisição da api.
    //Essa requisição sera feia apenas uma vez
    useEffect (() =>{  
        const fetchData = async () => {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }
        fetchData()
    },[url]) 
    
    //Exportando o hook
    return{data}


} 

