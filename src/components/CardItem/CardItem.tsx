import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface CardItemProps {
  avatar: { text?: string; src?: string }
  header: { title?: string; subheader?: string }
  content: {
    text?: string
  }
}

export default function CardItem({ header, avatar, content }: CardItemProps) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 250 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={avatar.src}>
            {avatar.text}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={header.title}
        subheader={header.subheader}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content.text}
        </Typography>
      </CardContent>
    </Card>
  )
}
