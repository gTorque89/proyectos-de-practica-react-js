import styles from "./SignUp.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ImputControl } from "../imputControl/ImputControl";

export function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  function registro() {
    if (!values.name || !values.email || values.pass) {
      setErrorMsg("Complete todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registro</h1>
        <ImputControl
          label="Nombre"
          placeholder="Ingrese un nombre"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <ImputControl
          label="Email"
          placeholder="Ingrese un correo electronico"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <ImputControl
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={registro} disabled={submitButtonDisabled}>
            Guardar
          </button>
          <p>Si ya tiene una cuenta puede iniciar sesión aqui: </p>
          <span>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
