import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>login</h1>
        <div className={styles.footer}>
            <b className={styles.error}>Error</b>
            <button> login btn</button>
            <p>
                Crear cuenta
                <span>
                    <Link to="/signup">Ir 
                    </Link>
                </span>
            </p>
        </div>
      </div>
    </div>
  );
}
