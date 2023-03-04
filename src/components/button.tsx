import { type FunctionComponent } from 'react'

export type ButtonProps = {
  assetUrl: string
  link: string
}

export const Button: FunctionComponent<ButtonProps> = ({ assetUrl, link }) => {
  return <a href={link}>button</a>
}
