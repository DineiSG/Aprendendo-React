import './MyForm.css'
import {useState} from "react"

const MyForm = () => {
    //3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) =>{
        setName(e.target.value)
    }
    //console.log(name)
   // console.log(email)



    const handleSubmit=(e) =>{
         e.preventDefault() /* esta declaração serve para impedir que a pagina recarregue ao clicar no botao submit */
         console.log("Enviando o formulario")
         console.log(name, email)
    }
   

  return (
    <div>
      {/* 1 - criacao de form */}
      {/* 5 - envio de form */}
      <form onSubmit={handleSubmit}>
        <div>
            {/*O htmloFor e o name do input devem ter o mesmo valor */}
            <label htmlFor="name">NAME:</label>
             {/*Criando o input de texto */}
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
        </div>
            {/*2 - label envolvendo input */}
            <label>
                {/* 4 - Simplificação de manipulação de state */}
              <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />  
            </label>
            <input type="submit" value="Enviar"></input>
      </form>
    </div>
  )
}

export default MyForm
