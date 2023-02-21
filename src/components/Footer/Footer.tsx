import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box
      component="footer"
      width="100%"
      p={1}
      sx={{
        backgroundColor: (theme) => orange[200],
        display: "flex",
        justifyContent: "center",
        a: { textDecoration: "none" },
      }}
    >
      <Typography
        component="a"
        href="https://stealth-truffle-01b.notion.site/SOLID-com-React-44d1fda6652d472f90ad8a0343549078"
        target="_blank"
        color="secondary"
        fontWeight={600}
      >
        SOLID
      </Typography>
    </Box>
  );
}
