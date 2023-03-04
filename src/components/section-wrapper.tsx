import { assets } from '@/assets'
import { styles } from '@/styles'
import { classNames } from '@/utils'
import { type ReactNode, type FunctionComponent } from 'react'
import { Button } from './button'
import { motion } from 'framer-motion'
import { fadeLeftMini, fadeRightMini } from '@/variants'

export type SectionWrapperProps = {
  title: string
  description: ReactNode
  mockupImage: string
  showButton?: boolean
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
          reverse ? styles.boxReverseClass : styles.boxClass,
          'w-11/12 sm:w-full minmd:w-3/4'
        )}
      >
        <motion.div
          className={classNames(
            styles.descDiv,

            reverse ? styles.textRight : styles.textLeft
          )}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={reverse ? fadeRightMini : fadeLeftMini}
        >
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
        </motion.div>

        <div className={classNames('flex-1 p-8 sm:px-0', styles.flexCenter)}>
          <motion.img
            src={mockupImage}
            alt="mockup"
            className={classNames(styles.sectionImg)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={reverse ? fadeLeftMini : fadeRightMini}
          />
        </div>
      </div>
    </section>
  )
}
