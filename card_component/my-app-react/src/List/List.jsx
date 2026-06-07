import styles from './List.module.css';
import { useState } from 'react';

function List() {
    const fruits = [
  { name: 'Apple',      emoji: '🍎', calories: 100, flavor: 'Sweet',  badge: 'High sugar',   origin: 'Central Asia', season: 'Autumn',  vitamins: 'C, B6',    fact: '7,500+ varieties' },
  { name: 'Banana',     emoji: '🍌', calories: 200, flavor: 'Sweet',  badge: 'Energy boost', origin: 'Southeast Asia', season: 'All year', vitamins: 'B6, C',   fact: 'Berries botanically' },
  { name: 'Cherry',     emoji: '🍒', calories: 150, flavor: 'Tart',   badge: 'Antioxidant',  origin: 'Europe/Asia',  season: 'Summer',  vitamins: 'C, K',     fact: 'Symbol of Japan' },
  { name: 'Date',       emoji: '🌴', calories: 300, flavor: 'Sweet',  badge: 'High fiber',   origin: 'Middle East',  season: 'Autumn',  vitamins: 'B6, K',    fact: 'Oldest cultivated fruit' },
  { name: 'Elderberry', emoji: '🫐', calories: 50,  flavor: 'Bitter', badge: 'Immune boost', origin: 'Europe',       season: 'Autumn',  vitamins: 'C, A',     fact: 'Used in folk medicine' },
]

    const [selected, setSelected]=useState(null);

    const handleSelect = (name) => {
        setSelected(selected === name ? null : name);
    }

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
            {fruits.map((f)=> (
                <li key={f.name} className={styles.item}>
                    <div className={styles.itemMain}>
                        <div className={styles.avatar}>{f.emoji}</div>
                        <div className={styles.content}>
                            <h4 className={styles.title}>{f.name}</h4>
                            <span className={styles.subtitle}>{f.calories} cal · {f.flavor}</span>
                        </div>

                        <span className={styles.badge}>{f.badge}</span>
                        <button className={`${styles.btnSelect} ${selected === f.name ? styles.active : ''}`} 
                        onClick={() => handleSelect(f.name)}>
                            {selected === f.name ? 'close' : 'details'}
                        </button>
                    </div>

                     {selected === f.name && (
              <div className={styles.detail}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Origin</span>
                  <span className={styles.detailValue}>{f.origin}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Season</span>
                  <span className={styles.detailValue}>{f.season}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Vitamins</span>
                  <span className={styles.detailValue}>{f.vitamins}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Fun fact</span>
                  <span className={styles.detailValue}>{f.fact}</span>
                </div>
              </div>
            )}
                </li>
                ))
            }

        </ul>
            {fruits.length === 0 && <div className={styles.empty}>No items found</div>}
        </div>
    );
}

export default List;