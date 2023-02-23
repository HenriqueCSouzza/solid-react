import { Box, Grid, Container, CircularProgress } from "@mui/material";
import CardItem from "../components/CardItem/CardItem";
import UserDrawerView from "../views/UserDrawerView";
import User from "../types/user";
import useUsers from "../hooks/useUsers";

export default function UsersView() {
  const { users, user, openUser, setOpenUser, setUser, loading } = useUsers();

  if (loading) {
    return (
      <Box
        height="90vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress
          sx={{
            color: "#fff",
          }}
        />
      </Box>
    );
  }

  return (
    <>
      <Container>
        <Grid container flexDirection="row" spacing={2}>
          {users
            .sort(function (a, b) {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            })
            .map((item: User) => {
              const avatarText = item.name[0];
              return (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <CardItem
                    avatar={{
                      text: avatarText,
                      src: item.avatar_url,
                    }}
                    content={{
                      text: item.bio || "não gosto de biografia",
                      onClick: () => {
                        setUser(item);
                        setOpenUser(true);
                      },
                    }}
                    header={{
                      subheader: item.login,
                      title: item.name,
                    }}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Container>
      {openUser && user && (
        <UserDrawerView
          githubId={user.id}
          open={openUser}
          onClose={() => setOpenUser(false)}
        />
      )}
    </>
  );
}
