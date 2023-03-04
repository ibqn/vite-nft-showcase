import { styles } from '@/styles'
import { classNames } from '@/utils'
import { type FunctionComponent } from 'react'

export type ButtonProps = {
  assetUrl: string
  link: string
}

export const Button: FunctionComponent<ButtonProps> = ({ assetUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={classNames(
        styles.btnBlack,
        'transition-all duration-300 hover:bg-black/10'
      )}
    >
      <img className={styles.btnIcon} src={assetUrl} alt="Expo icon" />
      <div className="ml-4 flex flex-col justify-start">
        <p className={classNames(styles.btnText, 'text-xs font-normal')}>
          View it on
        </p>
        <p className={classNames(styles.btnText, 'text-sm font-bold')}>
          Expo Store
        </p>
      </div>
    </a>
  )
}
