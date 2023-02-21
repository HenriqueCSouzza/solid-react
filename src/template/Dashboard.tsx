import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import { Box, Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Grid container flexDirection="column" spacing={10}>
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid item xs={12}>
          <Box component="main" width="100%">
            <Outlet />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
