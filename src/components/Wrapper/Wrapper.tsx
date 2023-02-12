import styles from "./Wrapper.module.scss";

interface IWrapperProps {
    children: JSX.Element | React.ReactNode,
}

export default function Wrapper({ children }: IWrapperProps) {
  return <div className={styles.wrapper}>{ children }</div>
}