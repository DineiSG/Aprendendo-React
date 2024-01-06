
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

    //6 - Loading
    //criando os states de loading e iniciando como falso pois ainda nao esta carregando nada
    const [loading, setLoading] = useState(false)

    //7 - Tratando erros
    const[error, setError] = useState(null)
 
    //Deletando um item 
    const [itemId, setItemId] = useState(null)
    
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

            //Configurando o metodo DELETE
        }else if (method === "DELETE"){
            setConfig({
                method,
                headers:{
                    "Content-type":"application/json"
                }
            })
            setMethod(method)

            //Chamando o id do produto para deletar
            setItemId(data)
         
        }
    }


    //Criando um request que invocara a requisição da api.
    //Essa requisição sera feia apenas uma vez
    //Adicionando o loading
    useEffect (() =>{  
        const fetchData = async () => {
            //6 - Loading
            //iniciando o loading
            setLoading(true)

            // 7 - Tratando erros
            try{
                const res = await fetch(url)

                const json = await res.json()

                setData(json)
            }catch (error){

                console.log(error.message)

                //Mensagem que sera exibida em caso de erro
                setError("Houve algum erro ao carregar os dados")

            }
            //finalizando o loading
            setLoading(false)
        }
        fetchData()
        //trazendo os dados atualizados
    },[url, callFetch]) 

    //5 - refatorando o POST
    
    useEffect(() =>{

        const httpRequest = async () => {
        //verificando e validando as configurações de URL
        let json;
 
        if (method === "POST") {
          let fetchOptions = [url, config];
   
          const res = await fetch(...fetchOptions);
   
          json = await res.json();
          
          //Chamando a url preparada para excluir o produto
        } else if (method === "DELETE") {
          const deleteUrl = `${url}/${itemId}`;
   
          const res = await fetch(deleteUrl, config);
   
          json = await res.json();
        }
   
        setCallFetch(json);
      }
      httpRequest();

      // Declarando as dependencias
    },[config, method, url, itemId])
    
    //Exportando o hook
    //Exportando a função loading
    //exportando a função de erro
    //Exportando o itemtemId
    return{data, httpConfig, loading, error}
}

