import styles from "./ImputControl.module.css";
export function ImputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
        <input type="text" {...props}></input>

    </div>
  );
}
//<imput type="text" {...props}/>{" "}