import { h, Component } from "preact";
import TopAppBar from "preact-material-components/TopAppBar";
import "preact-material-components/TopAppBar/style.css";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

const NavigationToolbar = ({
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
            <TopAppBar.Icon navigation>
              <HomeIcon />
            </TopAppBar.Icon>
          )}
          <TopAppBar.Title>{title}</TopAppBar.Title>
        </TopAppBar.Section>
        <TopAppBar.Section align-end>
          {navigationItems.map((item) => (
            <TopAppBar.Icon
              key={item.id}
              onClick={() => onSelectPage(item.id)}
              title={item.label}
            >
              {item.label}
            </TopAppBar.Icon>
          ))}
        </TopAppBar.Section>
      </TopAppBar.Row>
    </TopAppBar>
  );
};

export default NavigationToolbar;
