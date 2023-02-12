import styles from "./Fraction.module.scss";
import Btn from "../Buttons/Btn";

export default function Fraction() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.logo}>Fraction Logo</div>
            <div className={styles.description}>Fraction description</div>
            <Btn>Choose</Btn>
        </div>
    )
}