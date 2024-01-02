
//Importando o use state e o useEffect
import { useState, useEffect } from "react";

//4-Custom hook
//Exportando a função. Para isso recebemos a url da api, o endpoint 
// para puxar o dado que iremos necessitar
export const useFetch = (url) => {
    //Informando que serao recebidos dados da API
    const [data, setData]= useState(null)

    //5 - refatorando o POST

    //configurando o metodo que sera utulizado
    const [config, setConfig] = useState(null)
    //informando o metodo que sera utilizado na função
    const[method, setMethod] = useState(null)
    //criando a chamada para receber os dados quando forem alterados
    const [callFetch, setCallFetch] = useState(false)
    
    //criando o setConfig
    const httpConfig = (data, method) =>{
        if (method === "POST"){
            setConfig({
                method,
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }


    //Criando um request que invocara a requisição da api.
    //Essa requisição sera feia apenas uma vez
    useEffect (() =>{  
        const fetchData = async () => {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }
        fetchData()
        //trazendo os dados atualizados
    },[url, callFetch]) 

    //5 - refatorando o POST
    useEffect ( ()=>{
        //verificando e validando as configurações de URL
        const httpRequest = async () =>{
            if(method === "POST"){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()

                setCallFetch(json)
            }
        }
        httpRequest()
        

    },[config, method, url])
    
    //Exportando o hook
    return{data, httpConfig}


} 

