import Typography, { TypographyProps } from '@mui/material/Typography'

export default function SubTitle({ children }: TypographyProps) {
  return (
    <Typography fontWeight={300} color="text.secondary">
      {children}
    </Typography>
  )
}
