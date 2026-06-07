import styles from './Card.module.css'

function Card({nombre, tipo, descripción, imagen}){
    return (
        <article className={styles.card}>
            <img className={styles.media} src={imagen} alt={nombre} />
            <div className={styles.content}>
                <span className={styles.eyebrow}>{tipo}</span>
                <h3 className={styles.title}>{nombre}</h3>
                <p className={styles.text}>{descripción}</p>
            </div>
        </article>
    );
}

export default Card;