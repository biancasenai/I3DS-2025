import styles from './switch.module.css'

const Switch = ({troca, isLight}) => {
  return (
    <div onClick={troca} className={isLight ? styles.light : ""}>
       <div id={styles.switch}>
         <button></button>
            <span></span>
        </div>
     </div>
  );
};

export default Switch;