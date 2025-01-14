import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

/**
 * Main application component that demonstrates basic Vite and Preact functionality.
 * Includes a counter implementation and links to documentation s
 * 
 * @component
 * @returns {JSX.Element} A fragment 
 */
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} className="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{" "}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
          rel="noreferrer"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p className="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
