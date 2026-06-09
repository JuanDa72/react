import {useState} from "react";
import styles from "./OnChange.module.css";

function OnChange(){

    const classes = {
        Rogue:   { emoji: '🥷', speed: 88, defense: 40 },
        Warrior: { emoji: '⚔️', speed: 50, defense: 90 },
        Mage:    { emoji: '🧙', speed: 60, defense: 35 },
        Archer:  { emoji: '🏹', speed: 80, defense: 55 },
        }

    const weapons = {
        Dagger: '🗡️',
        Sword:  '⚔️',
        Staff:  '🪄',
        Bow:    '🏹',
        }
    
    const [name, setName] = useState("Guest");
    const [type, setType] = useState("Select a class");
    const [powerLevel, setPowerLevel] = useState(0);
    const [weapon, setWeapon] = useState("Select a weapon");

     function HandleWeaponChange(event){
        setWeapon(event.target.value);
    }
    
    function handleChange(event){
        setName(event.target.value);
    }

    function HandleTypeChange(event){
        setType(event.target.value);
    }

    function HandlePowerLevelChange(event){

        if (event.target.value === '') {
        setPowerLevel('');
        return;
        }

        const num = parseInt(event.target.value);
        if (num >= 0 && num <= 100) {
            setPowerLevel(num);
  }
    }

    return (
  <div className={styles.layout}>

    <div className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Character name</label>
        <input className={styles.input} id="name" value={name} onChange={handleChange} />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="type">Class</label>
        <select className={styles.select} id="type" value={type} onChange={HandleTypeChange}>
          <option value="">Select a class</option>
          <option value="Rogue">Rogue</option>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Archer">Archer</option>
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="powerLevel">Power Level (1-100)</label>
        <input className={styles.input} id="powerLevel" value={powerLevel} type="number" onChange={HandlePowerLevelChange} min="1" max="100" />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="weapon">Weapon</label>
        <select className={styles.select} id="weapon" value={weapon} onChange={HandleWeaponChange}>
          <option value="">Select a weapon</option>
          <option value="Dagger">Dagger</option>
          <option value="Sword">Sword</option>
          <option value="Staff">Staff</option>
          <option value="Bow">Bow</option>
        </select>
      </div>
    </div>

    <div className={styles.preview}>
      <div className={styles.avatarBig}>{classes[type]?.emoji ?? '❓'}</div>
      <div className={styles.charName}>{name}</div>
      <div className={styles.charClass}>{type || 'No class'}</div>
      <div className={styles.stats}>
        <div className={styles.statRow}>
          <span className={styles.statLabel}>Power</span>
          <div className={styles.statBarBg}>
            <div className={styles.statBar} style={{ width: `${powerLevel}%` }} />
          </div>
          <span className={styles.statVal}>{powerLevel}</span>
        </div>
        <div className={styles.statRow}>
          <span className={styles.statLabel}>Speed</span>
          <div className={styles.statBarBg}>
            <div className={styles.statBar} style={{ width: `${classes[type]?.speed ?? 0}%` }} />
          </div>
          <span className={styles.statVal}>{classes[type]?.speed ?? '—'}</span>
        </div>
        <div className={styles.statRow}>
          <span className={styles.statLabel}>Defense</span>
          <div className={styles.statBarBg}>
            <div className={styles.statBar} style={{ width: `${classes[type]?.defense ?? 0}%` }} />
          </div>
          <span className={styles.statVal}>{classes[type]?.defense ?? '—'}</span>
        </div>
      </div>
      <div className={styles.weaponRow}>
        {weapons[weapon] ?? '—'} {weapon || 'No weapon'}
      </div>
    </div>

  </div>
)
}


export default OnChange;