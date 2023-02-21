import { useContext } from 'react'
import GlobalContextProps from '../types/context'
import globalContext from '../context/globalContext'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

// Princípios utilizados, Single Responsibility e Dependency Inversion
export default function AvatarView() {
  const { user } = useContext<GlobalContextProps>(globalContext)

  return (
    <Box sx={{ flexGrow: 0 }}>
      {user && <Avatar alt={user.name} src={user.avatar_url} />}
    </Box>
  )
}
