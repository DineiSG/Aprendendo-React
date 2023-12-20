import './MyForm.css'
import {useState} from "react"

const MyForm = ({user}) => {
    //3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const handleName = (e) =>{
        setName(e.target.value)
    }
    //console.log(name)
   // console.log(email)



    const handleSubmit=(e) =>{
         e.preventDefault() /* esta declaração serve para impedir que a pagina 
         recarregue ao clicar no botao submit */
         console.log("Enviando o formulario")
         console.log(name, email, bio, role)

         // 7 - limpar formularios

         setName("")
         setEmail("")
         setBio("")
        
    }

    const[bio, setBio]=useState("")
    const [role, setRole]=useState("")
   

  return (
    <div>
      {/* 1 - criacao de form */}
      {/* 5 - envio de form */}
      {/* 6 - controled inputs */}
      <form onSubmit={handleSubmit}>
        <div>
            {/*O htmloFor e o name do input devem ter o mesmo valor */}
            <label htmlFor="name">Nome:</label>
             {/*Criando o input de texto */}
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
        </div>
            {/*2 - label envolvendo input */}
            <label>
                {/* 4 - Simplificação de manipulação de state */}
              <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>  
            </label>
            {/* 8 - textarea*/}
            <label> 
              <span>Bio</span><br/>
              <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) =>setBio(e.target.value)} value={bio} ></textarea>
            </label>
            {/* 9 - select*/}
            <label>
              <span>Função no sistema</span><br/>
              <select name="role" onChange={(e)=>setRole(e.target.value)}>
                <option value="user">Usuário</option>
                <option value="edtor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>
            <input type="submit" value="Enviar"></input>
      </form>
    </div>
  )
}

export default MyForm
