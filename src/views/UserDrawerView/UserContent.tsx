import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function UserContent({ content }: { content: any }) {
  const keysField = Object.keys(content)
    .map((item) => ({
      field: item,
      value: content[item],
    }))
    .sort(function (a, b) {
      return a.field < b.field ? -1 : a.field > b.field ? 1 : 0;
    });

  return (
    <Box>
      <Grid container flexDirection="column">
        {keysField.map((item, index) => (
          <Grid item key={index}>
            <Box
              p={1}
              sx={{
                backgroundColor: (theme) =>
                  index % 2 === 0
                    ? theme.palette.grey[400]
                    : theme.palette.grey[700],
                color: index % 2 === 0 ? "#222" : "#d7d7d7",
              }}
            >
              <Typography variant="body1" fontWeight={600}>
                {item.field}
              </Typography>
              <Typography variant="subtitle1">{String(item.value)}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
