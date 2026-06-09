import {useState} from 'react';
import styles from './tamagotchi.module.css';
import polliHambre from '../assets/polli-hambre.png';
import polliFeliz from '../assets/polli-feliz.png';
import polliNormal from '../assets/polli-normal.png';
import polliCansado from '../assets/polli-cansado.png';

function Tamagotchi(){

    const [pet, setPet] = useState({
        nombre: "Tommaso",
        hambre: 50,
        felicidad: 50,
        energia: 50,
        edad: 0
    });

    const [mensaje, setMensaje] = useState("¡Hola, soy Tommaso!");

    const imagenPet = pet.energia < 20  ? polliCansado
                : pet.hambre < 20   ? polliHambre
                : pet.felicidad < 20 ? polliNormal
                : polliFeliz;

    function handleAlimentar(){
        setPet(pet => ({...pet, hambre: Math.min(100, pet.hambre + 20)}));
        setMensaje("¡Gracias por alimentarme!");
        }

    function handleJugar(){
        setPet(pet => ({...pet, felicidad: Math.min(100, pet.felicidad + 20), energia: Math.max(0, pet.energia - 10)}));
        setMensaje("¡Me encanta jugar contigo!");
        }

    function handleDormir(){
        setPet(pet => ({...pet, energia: Math.min(100, pet.energia + 20), hambre: Math.max(0, pet.hambre - 10)}));
        setMensaje("¡Estoy cansado, necesito dormir!");
        }

    return (
        <div className={styles.container}>
  <div className={styles.petDisplay}>
    <img src={imagenPet} alt="Tamagotchi" className={styles.petImage} />
    <p className={styles.petNombre}>{pet.nombre}</p>
    <p className={styles.mensaje}>{mensaje}</p>
  </div>

  <div className={styles.stats}>
    <div className={styles.statRow}>
      <span className={styles.statLabel}>Hambre</span>
      <div className={styles.statBarBg}>
        <div className={styles.statBar} style={{ width: `${pet.hambre}%` }} />
      </div>
      <span className={styles.statVal}>{pet.hambre}</span>
    </div>
    <div className={styles.statRow}>
      <span className={styles.statLabel}>Felicidad</span>
      <div className={styles.statBarBg}>
        <div className={styles.statBar} style={{ width: `${pet.felicidad}%` }} />
      </div>
      <span className={styles.statVal}>{pet.felicidad}</span>
    </div>
    <div className={styles.statRow}>
      <span className={styles.statLabel}>Energía</span>
      <div className={styles.statBarBg}>
        <div className={styles.statBar} style={{ width: `${pet.energia}%` }} />
      </div>
      <span className={styles.statVal}>{pet.energia}</span>
    </div>
  </div>

  <div className={styles.botones}>
    <button className={styles.btn} onClick={handleAlimentar} disabled={pet.hambre === 100}>Alimentar</button>
    <button className={styles.btn} onClick={handleJugar} disabled={pet.energia === 0 || pet.felicidad === 100}>Jugar</button>
    <button className={styles.btn} onClick={handleDormir} disabled={pet.energia === 100}>Dormir</button>
  </div>
</div>

    );
}

export default Tamagotchi;