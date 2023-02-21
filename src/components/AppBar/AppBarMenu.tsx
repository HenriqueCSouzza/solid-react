import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  "single-responsibility-principle",
  "open-closed-principle",
  "liskov-substitution-principle",
  "interface-segregation-principle",
  "dependency-inversion-principle",
  "users",
];

export default function AppBarMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: "block",
        }}
      >
        {pages.map((page) => {
          const splitLabel = page.replaceAll("-", " ");

          return (
            <MenuItem
              key={page}
              sx={{
                textDecoration: "none",
                color: (theme) => theme.palette.text.primary,
                textTransform: "uppercase",
              }}
              component="a"
              href={page}
            >
              <Typography textAlign="center">{splitLabel}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
