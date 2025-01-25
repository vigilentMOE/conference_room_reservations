import "./styles/app.css";
import { VitePreviewPage } from "./pages/vitePreviewPage";
import { ListConferenceRooms } from "./pages/listConferenceRooms";
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
  console.log(page);
  // Main component props
  const mainNavConfig = {
    onSelectPage: setPage,
    title: "Resource Reservations",
    showMenu: true,
    navigationItems: [
      { id: "vitePreviewHome", icon: "home", label: "Vite Test Page" },
      { id: "listConferenceRooms", icon: "event", label: "Reservations" },
    ],
  };

  // @ts-ignore
  return (
    <>
      <NavigationToolbar {...mainNavConfig} />
      <div className="main-content">
        {page === "vitePreviewHome" && <VitePreviewPage />}
        {page === "listConferenceRooms" && <ListConferenceRooms />}
      </div>
    </>
  );
}
