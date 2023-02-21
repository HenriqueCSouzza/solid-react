import {
  Drawer,
  DialogContent,
  DialogTitle,
  DrawerProps,
} from "@mui/material/";
import { sxContent, sxDialogTitle, sxDrawer } from "./style";

interface Props extends DrawerProps {
  header: JSX.Element;
  content: JSX.Element;
}

export default function DrawerStyled({
  open,
  onClose,
  header,
  content,
}: Props) {
  return (
    <>
      <Drawer
        sx={sxDrawer}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={onClose}
      >
        <DialogTitle sx={sxDialogTitle}>{header}</DialogTitle>
        <DialogContent sx={sxContent}>{content}</DialogContent>
      </Drawer>
    </>
  );
}
