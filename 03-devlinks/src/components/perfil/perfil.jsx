import styles from "./perfil.module.css"

const Perfil = ({children, fotoperfil}) => {
  return (
    <div id={styles.perfil}>
        <img src={fotoperfil} alt="" />
        <p>{children}  </p>
    </div>
  )
}

export default Perfil