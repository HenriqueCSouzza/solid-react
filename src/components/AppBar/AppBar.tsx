import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import AppBarLogo from './AppBarLogo'
import AppBarMenu from './AppBarMenu'
import AvatarView from '../../views/AvatarView'

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" component="nav" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <AppBarMenu />
          <AppBarLogo />
          <AvatarView />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
