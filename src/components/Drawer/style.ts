export const sxContent = {
  margin: 0,
  padding: 0,
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "&::-webkit-scrollbar-track": {
    display: "none",
  },
  "&::-webkit-scrollbar-thumb": {
    display: "none",
  },
};

export const sxDrawer = {
  flexShrink: 0,
  zIndex: 1300,
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    zIndex: 1300,
    border: "none",
  },
};

export const sxDialogTitle = {
  padding: 1.5,
  backgroundColor: (theme: any) => theme.palette.background.paper,
  border: (theme: any) => `none`,
};
