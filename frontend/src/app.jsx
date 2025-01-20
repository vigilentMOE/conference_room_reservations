import "./app.css";
import { VitePreviewPage } from "./pages/vitePreviewPage";
import { useState } from "preact/hooks";
import NavigationToolbar from "./components/global/navbar";

/**
 * Main application component that serves as the application container.
 *
 * @component
 * @returns {JSX.Element} The VitePreviewPage component
 */
export function App() {
  const [page, setPage] = useState("vitePreview");

  return (
    <>
      <NavigationToolbar onSelectPage={setPage} />
      <div className="main-content">
        {page === "vitePreview" && <VitePreviewPage />}
        {page === "otherPage" && <div>Other Page</div>}
      </div>
    </>
  );
}
