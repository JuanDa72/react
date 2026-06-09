import { useState } from 'react'
import styles from './Color_picker.module.css'

function Color_picker() {
    const [color, setColor] = useState('#ef9f27')

    return (
        <div className={styles.container}>
            <div className={styles.preview} style={{ backgroundColor: color }}>
                <span className={styles.swatchLabel}>Selected color</span>
                <strong className={styles.swatchValue}>{color}</strong>
            </div>

            <div className={styles.controls}>
                <label className={styles.label} htmlFor="colorPicker">Choose a color</label>
                <input
                    className={styles.input}
                    id="colorPicker"
                    type="color"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                />
            </div>
        </div>
    )
}

export default Color_picker