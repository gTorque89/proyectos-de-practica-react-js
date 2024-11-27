import { Link } from "react-router-dom";
import {auth} from "../../firebase"

export function Home(props) {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Registrar</Link>
        </h1>
      </div>
      <h2>{props.name ? `Bienvenido - ${props.name} ` : "Inicie sesion"}</h2>
    </div>
  );
}
