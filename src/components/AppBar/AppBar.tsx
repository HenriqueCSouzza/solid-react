import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AppBarLogo from "./AppBarLogo";
import AppBarMenu from "./AppBarMenu";

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="regular">
          <AppBarLogo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
