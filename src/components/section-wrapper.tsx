import { FunctionComponent } from 'react'

export type SectionWrapperProps = {
  title: string
  description: string
  showButton?: boolean
  mockupImage?: string
  reverse?: boolean
  banner?: string
}
export const SectionWrapper: FunctionComponent<SectionWrapperProps> = ({
  title,
  description,
  showButton,
}) => {
  return <div>section wrapper</div>
}
