import Typography, { TypographyProps } from '@mui/material/Typography'

export default function Title({ children }: TypographyProps) {
  return (
    <Typography fontWeight={600} color="text.primary">
      {children}
    </Typography>
  )
}
