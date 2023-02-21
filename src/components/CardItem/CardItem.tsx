import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Title from "../Title";
import SubTitle from "../SubTitle";
import BodyText from "../BodyText";
import { red } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid } from "@mui/material";

interface CardItemProps {
  avatar: {
    text?: string;
    src?: string;
  };
  header: { title?: string; subheader?: string };
  content: {
    text?: string;
    onClick?: any;
  };
}

export default function CardItem({ header, avatar, content }: CardItemProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent
        sx={{
          padding: 0,
        }}
      >
        <Grid
          container
          flexDirection="row"
          spacing={2}
          alignItems="center"
          sx={{ padding: 2 }}
        >
          <Grid item>
            <Avatar sx={{ bgcolor: red[500] }} src={avatar.src}>
              {avatar.text}
            </Avatar>
          </Grid>
          <Grid item>
            <Title fontWeight={600} color="text.primary">
              {header.title}
            </Title>
            <SubTitle fontWeight={300} color="text.secondary">
              {header.subheader}
            </SubTitle>
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.grey[400],
            height: "150px",
            padding: 1,
          }}
        >
          <BodyText>{content.text}</BodyText>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton onClick={content.onClick}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
