import { useState, useEffect } from "react";

export const useFetch = (url =>{
    const [data, setData] = useState(null)

    const [config, setConfig]=useState(null)

    const [method, setMethod]=useState(null)

    const [callFetch, setCallFetch] = useState(false)

    const [loading, setLoading]= useState(false)

    const [error, setError]= useState(null)

    const[itemId, setItemId]= useState(null)

    const httpConfig = (data, method) =>{
        if (method === "GET"){
            setConfig({
                method,
                heders:{
                    "Content-type":"application/json"
                },
                body:JSON.stringfy(data)
            })
            setMethod(method)
            setItemId(data)
        }
    }



    useEffect(() =>{
        const fetchData = async()=>{
            setLoading (true)

            try{
                const res = await fetchData(url)
                const json = await res.json()
                setData(json)
            }catch (error){
                setError("A pesquisa por ID nao encontrou resultados.")
            }
            setLoading(false)
        }
        fetchData()
    },[url, callFetch])

    useEffect(() =>{
        const httpRequest = async ()=>{
            let json
            if (method==="GET"){
                let fetchOptions = (url, config)
                const res = await fetchOptions(...fetchOptions)
                json = await res.json()
            }
            setCallFetch(json)
        } 
        httpRequest()
    },[config, method,url])

    return{data,httpConfig, loading, error, itemId}
})