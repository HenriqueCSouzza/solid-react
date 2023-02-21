import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function UserContent({ content }: { content: any }) {
  const keysField = Object.keys(content)
    .map((item) => ({
      field: item,
      value: content[item],
    }))
    .sort(function (a, b) {
      return a.field < b.field ? -1 : a.field > b.field ? 1 : 0
    })

  return (
    <Box p={1}>
      <Grid container flexDirection="column">
        {keysField.map(
          (item) =>
            item.value && (
              <Grid item>
                <Typography variant="body1" fontWeight={600}>
                  {item.field}
                </Typography>
                <Typography variant="subtitle1">{item.value}</Typography>
              </Grid>
            ),
        )}
      </Grid>
    </Box>
  )
}
