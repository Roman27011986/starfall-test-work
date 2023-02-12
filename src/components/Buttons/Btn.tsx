import styles from "./Buttons.module.scss";

interface IBtnProps {
    children: string,
};

export default function Btn({children}: IBtnProps) {
    return <button className={styles.btn}>{children}</button>
};