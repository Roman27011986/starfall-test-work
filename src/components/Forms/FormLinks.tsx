import metamaskImg from "../../images/metamask.png";
import googleImg from "../../images/google.png";

import styles from "./FormsStyles.module.scss";

export default function FormLinks() {
    return(
        <ul className={styles.listLinks}>
            <li className={styles.listItem}>
                <a className={styles.listLink} rel="noreferrer" target="_blank" href="https://metamask.io/">
                    <img src={metamaskImg} alt="fox" />
                </a>
                <p className={styles.listText}>Metamask</p>
            </li>
            <li className={styles.listItem}>
                <a className={styles.listLink} rel="noreferrer" target="_blank" href="https://www.google.ro/?hl=ro">
                    <img src={googleImg} alt="google logo" />
                </a>
                <p className={styles.listText}>Google</p>
            </li>
        </ul>
    )
}