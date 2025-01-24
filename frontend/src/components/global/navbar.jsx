import { h, Component } from "preact";
import TopAppBar from "preact-material-components/TopAppBar";
import "preact-material-components/TopAppBar/style.css";

export default class NavigationToolbar extends Component {
  render() {
    const { onSelectPage } = this.props;

    return (
      <TopAppBar className="topappbar">
        <TopAppBar.Row>
          <TopAppBar.Section align-start>
            <TopAppBar.Icon navigation>menu</TopAppBar.Icon>
            <TopAppBar.Title>Conference Room Reservations</TopAppBar.Title>
          </TopAppBar.Section>
          <TopAppBar.Section align-end>
            <TopAppBar.Icon onClick={() => onSelectPage("vitePreview")}>
              home
            </TopAppBar.Icon>
            <TopAppBar.Icon onClick={() => onSelectPage("otherPage")}>
              pages
            </TopAppBar.Icon>
            <TopAppBar.Icon>more_vert</TopAppBar.Icon>
          </TopAppBar.Section>
        </TopAppBar.Row>
      </TopAppBar>
    );
  }
}
