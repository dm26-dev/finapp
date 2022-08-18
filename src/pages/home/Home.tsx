import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

export const Home = () => {

  // INSTANCES
  let navigate = useNavigate();

  // FUNTIONS
  const redirectFinances = () => navigate("/finances");

  return (
    <div className={styles.home}>
      <div className={styles.home__cont}>
        <div className={styles.home__cont_title}>
          <h1>Bienvenido a FinApp !</h1>
          <p>
            Controla tus gastos en una sola aplicacíon, revisa tus gastos
            mensuales y administra tu dinero, que estas esperando ?
          </p>
        </div>
        <div className={styles.home__cont_button}>
          <button onClick={redirectFinances}>Ingresar</button>
        </div>
      </div>
    </div>
  );
};
