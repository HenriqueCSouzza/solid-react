import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import useUsers from "../hooks/useUsers";

// Princípios utilizados, Single Responsibility e Dependency Inversion
export default function AvatarView() {
  const { user } = useUsers();

  return (
    <Box sx={{ flexGrow: 0 }}>
      {user && <Avatar alt={user.name} src={user.avatar_url} />}
    </Box>
  );
}
