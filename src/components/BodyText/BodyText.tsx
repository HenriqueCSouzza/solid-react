import Typography, { TypographyProps } from '@mui/material/Typography'

export default function BodyText({
  children,
  variant = 'body1',
  color = 'text.primary',
}: TypographyProps) {
  return (
    <Typography variant={variant} color={color}>
      {children}
    </Typography>
  )
}
