import { Outlet } from 'react-router-dom'
import AppBar from '../components/AppBar'
import { Box, Grid } from '@mui/material'

export default function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.grey[50],
      }}
    >
      <Grid container flexDirection="column" spacing={7}>
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid item xs={12}>
          <Box component="main" width="100%">
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
