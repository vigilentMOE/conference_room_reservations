import { useState } from "preact/hooks";
import preactLogo from "../assets/preact.svg";
import viteLogo from "/vite.svg";
import "../app.css";

export function VitePreviewPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noreferrer">
          <img src={preactLogo} className="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div className="card">
        <button
          onClick={() =>
            setCount((prevCount) => {
              let newCount = prevCount;
              newCount += 2;
              if (newCount > 10) {
                newCount = 0;
              }
              return newCount;
            })
          }
        >
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
