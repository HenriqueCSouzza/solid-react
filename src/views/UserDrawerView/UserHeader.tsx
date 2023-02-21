import Grid from '@mui/material/Grid'
import AvatarView from '../AvatarView'

export default function UserHeader({ name }: { name?: string }) {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item sx={{ color: '#fff' }}>
        {name}
      </Grid>
      <Grid item>
        <AvatarView />
      </Grid>
    </Grid>
  )
}
