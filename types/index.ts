import { MousEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MousEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
}
