import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";

export default function AppBarLogo() {
  return (
    <>
      <AdbIcon sx={{ display: "flex", mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        sx={{
          mr: 2,
          display: "flex",
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Devs
      </Typography>
    </>
  );
}
