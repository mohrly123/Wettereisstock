
import styles from "../style/ActualWeather.module.css"
import { useState } from "react"

export default function ActualWeather() {
    const [showDialog, setShowDialog] = useState(true);         // Den POPUP am anfangen ein und aus schalten


    const verstanden = () => {
        setShowDialog(false);
    }

    async function wetterAbfrage() {
        const breitengrad = "46.629871";
        const längengrad = "13.190825";
        const apiKey = "1f592401aa37ce4cc56020dc435299ad";
        const url = ``;
    }

    return(
        <div className={styles.mainContainer}>
            {!showDialog && (
                <div className={styles.card}>

                </div>
            )}

            {showDialog && (
                <div className={styles.popUp}>
                    <p>Verwendung nur für private Zwecke!</p>
                    <p>Alle Angaben ohne Gewähr!</p>
                    <hr />
                    <button onClick={verstanden} className="btn">Verstanden 👍👍</button>
                </div>
            )}

        </div>
    )
}