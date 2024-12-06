// Startseite /
import { Link } from "react-router-dom";
import styles from "../style/Startseite.module.css";

export default function Startseite(){
    return(

        <div className={styles.mainContainer}>

            {/* HEADER BEREICH*/}
            <div className={styles.header}>
                <h2>Startseite</h2>
            </div>

            {/* CARD BEREICH*/}
            <div className={styles.card}>
                <Link to="/actualWeather">
                    <button>Aktuelles Wetter</button>
                </Link>
                
            </div>
        </div>
    )
}