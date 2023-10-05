/* Importando arquivo CSS*/
import styles from "./Title.module.css"

const Title = () => {
  return (
    <div>
        {/*fazendo uso do arquivo CSS para estilizar o componente */}
      <h1 className={styles.my_title}>Meu título</h1>
    </div>
  )
}

export default Title
