import "./styles/app.css";
import { VitePreviewPage } from "./pages/vitePreviewPage";
import { useState } from "preact/hooks";
import NavigationToolbar from "./components/global/navbar";
import { Fragment } from "preact/jsx-runtime";

/**
 * Main application component that serves as the application container.
 *
 * @component
 * @returns {Fragment} The VitePreviewPage component
 */
export function App() {
  const [page, setPage] = useState("vitePreviewHome");

  // Main component props
  const mainNavConfig = {
    title: "Resource Reservations",
    showMenu: true,
    navigationItems: [
      { id: "vitePreviewHome", icon: "home", label: "Dashboard" },
      { id: "reservations", icon: "event", label: "Reservations" },
    ],
  };

  // @ts-ignore
  return (
    <>
      <NavigationToolbar {...mainNavConfig} onSelectPage={setPage} />
      <div className="main-content">
        {page === "vitePreviewHome" && <VitePreviewPage />}
        {page === "listConferenceRooms" && <div>Other Page</div>}
      </div>
    </>
  );
}
