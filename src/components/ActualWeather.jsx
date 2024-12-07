import styles from "../style/ActualWeather.module.css"
import { useState, useEffect} from "react"

export default function ActualWeather() {
    const [showDialog, setShowDialog] = useState(true);         // Den POPUP am anfangen ein und aus schalten
    const [temperatur, setTemperatur] = useState("");
    const [gefuehlteTemp, setGefuehlteTemp] = useState("");
    const [beschreibung, setBeschreibung] = useState("");


    const verstanden = () => {
        setShowDialog(false);
    }

    async function wetterAbfrage() {
        const breitengrad = "46.629871";
        const längengrad = "13.190825";
        const apiKey = "1f592401aa37ce4cc56020dc435299ad";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${breitengrad}&lon=${längengrad}&appid=${apiKey}&units=metric&lang=de`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error" + response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setTemperatur(data.main.temp);
        setGefuehlteTemp(data.main.feels_like);
        setBeschreibung(data.weather[0].main);
    }

    useEffect(() => {
        wetterAbfrage();
    } ,[])

    

    return(
        <div className={styles.mainContainer}>
            {!showDialog && (
                <div className={styles.card}>
                    <h3>Aktuelles Wetter</h3>
                    <hr />
                    <p>Aktuelle Temperatur: {temperatur}°C</p>
                    <p>Gefühlt: {gefuehlteTemp}°C</p>
                    <p>Aktuelles Wetter: {beschreibung}</p>
                    <hr />
                    <button></button>
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