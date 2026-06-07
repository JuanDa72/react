import { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    const reset = () => setCount(0);

    return (
        <div className={styles.container}>
            <div className={styles.counter} role="group" aria-label="Counter controls">
                <div>
                    <div className={styles.label}>Count</div>
                    <div className={styles.value} aria-live="polite">{count}</div>
                </div>

                <div className={styles.buttons}>
                    <button className={`${styles.btn} ${styles.ghost}`} onClick={decrement} aria-label="Decrement">
                        -
                    </button>
                    <button className={`${styles.btn} ${styles.primary}`} onClick={increment} aria-label="Increment">
                        +
                    </button>
                    <button className={`${styles.btn}`} onClick={reset} aria-label="Reset">
                        Reset
                    </button>
                </div>
            </div>
            <span className={styles.srOnly} aria-hidden>Interactive counter widget</span>
        </div>
    );
}

export default Counter;