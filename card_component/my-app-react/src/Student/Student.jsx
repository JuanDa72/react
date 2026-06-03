import styles from './Student.module.css'
import PropTypes from 'prop-types'

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool
}


function Student(props){
    return (
        <div className={styles.card}>
            <div className={styles.row}>
                <span className={styles.label}>Name:</span>
                <span className={styles.value}>{props.name}</span>
            </div>
            <div className={styles.row}>
                <span className={styles.label}>Age:</span>
                <span className={styles.value}>{props.age}</span>
            </div>
            <div className={styles.row}>
                <span className={styles.label}>Is student?:</span>
                <span className={`${styles.status} ${props.isStudent ? styles.yes : styles.no}`}>
                    {props.isStudent ? "Yes" : "No"}
                </span>
            </div>
        </div>
    );
}

export default Student;