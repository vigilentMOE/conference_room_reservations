import { h, Component } from "preact";
import TopAppBar from "preact-material-components/TopAppBar";
import "preact-material-components/TopAppBar/style.css";
import "../../styles/navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

const NavigationToolbar = ({
  // default props
  onSelectPage,
  title = "Conference Room Reservations",
  showMenu = true,
  navigationItems = [
    { id: "vitePreview", icon: "home", label: "Home" },
    { id: "listConferenceRooms", icon: "pages", label: "Pages" },
  ],
}) => {
  return (
    <TopAppBar className="topappbar" onNav={() => {}}>
      <TopAppBar.Row>
        <TopAppBar.Section align-start>
          {showMenu && (
            <TopAppBar.Icon
              navigation
              onClick={() => onSelectPage("vitePreviewHome")}
              style="cursor: pointer;"
            >
              <HomeIcon />
            </TopAppBar.Icon>
          )}
          <TopAppBar.Title>{title}</TopAppBar.Title>
        </TopAppBar.Section>
        {/* right aligned navigation content */}
        <TopAppBar.Section align-end>
          <div className="nav-links">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => onSelectPage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </TopAppBar.Section>
      </TopAppBar.Row>
    </TopAppBar>
  );
};

export default NavigationToolbar;
