import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import MyTitle from "../atoms/MyTitle";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <div className={styles.container}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MyTitle text={"Vite"} />
      <MyTitle text={"React"} />
      <MyTitle text={"Mathias"} />
    </>
  );
}
