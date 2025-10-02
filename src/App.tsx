import { useState } from "react";
import styles from "./App.module.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <div className={styles.logoContainer}>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.logoReact}`}
            alt="React logo"
          />
        </a>
      </div>

      <h1 className={styles.title}>AI ChatBot Plugin</h1>

      <div className={styles.card}>
        <button
          className={styles.button}
          onClick={() => setCount((count) => count + 1)}
        >
          <span className={styles.count}>count is {count}</span>
        </button>
        <p className={styles.description}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
