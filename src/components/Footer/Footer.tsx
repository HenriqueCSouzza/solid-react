import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box
      component="footer"
      width="100%"
      p={1}
      sx={{
        backgroundColor: (theme) => theme.palette.grey[400],
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography alignSelf="center">@Solid</Typography>
    </Box>
  )
}
