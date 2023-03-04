import { assets } from '@/assets'
import { styles } from '@/styles'
import { classNames } from '@/utils'
import { type FunctionComponent } from 'react'
import { Button } from './button'

export type SectionWrapperProps = {
  title: string
  description: string
  showButton?: boolean
  mockupImage: string
  reverse?: boolean
  banner?: string
}
export const SectionWrapper: FunctionComponent<SectionWrapperProps> = ({
  title,
  description,
  mockupImage,
  showButton,
  reverse,
  banner,
}) => {
  return (
    <section
      className={classNames(
        'min-h-screen',
        banner,
        banner && styles.bgImage,
        styles.section,
        reverse ? styles.bgWhite : styles.bgPrimary
      )}
    >
      <div
        className={classNames(
          'flex items-center',
          reverse ? styles.textRight : styles.textLeft,
          'w-11/12 sm:w-full minmd:w-3/4'
        )}
      >
        <div className={classNames(styles.descDiv)}>
          <h1
            className={classNames(
              reverse ? styles.blackText : styles.whiteText,
              styles.h1Text
            )}
          >
            {title}
          </h1>
          <p
            className={classNames(
              reverse ? styles.blackText : styles.whiteText,
              styles.descriptionText
            )}
          >
            {description}
          </p>

          {showButton && <Button assetUrl={assets.expo} link="#" />}
        </div>

        <div className={classNames('flex-1 p-8 sm:px-0', styles.flexCenter)}>
          <img
            src={mockupImage}
            alt="mockup"
            className={classNames(styles.sectionImg)}
          />
        </div>
      </div>
    </section>
  )
}
