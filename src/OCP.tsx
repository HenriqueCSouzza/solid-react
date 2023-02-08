/*
  - Os componentes da aplicação devem ser **abertos para extensão**;
  - Os componentes da aplicação devem ser **fechados para modificações**;
*/

import { MouseEventHandler } from 'react'

const MyButton = ({
  onClick,
  children,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  children: React.ReactNode
}) => {
  return <button onClick={onClick}>{children}</button>
}

const MyLink = ({
  onClick,
  children,
}: {
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
  children: React.ReactNode
}) => {
  return <a onClick={onClick}>{children}</a>
}

export default function OCP() {
  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <div>
      <MyButton onClick={handleClick}>Click me MyButton </MyButton>
      <MyLink onClick={handleClick}>Click me too MyLink</MyLink>
    </div>
  )
}
