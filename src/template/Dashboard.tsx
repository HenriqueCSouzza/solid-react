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
      <Grid container flexDirection="column">
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid item xs={12}>
          <Box component="main" mt={2.5} width="100%">
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
