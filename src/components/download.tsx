import { assets } from '@/assets'
import { styles } from '@/styles'
import { classNames } from '@/utils'

export const Download = () => {
  return (
    <div className={classNames(styles.section, styles.bgWhite)}>
      <div className={classNames(styles.subSection, 'flex-col text-center')}>
        <div>
          <h1 className={classNames(styles.h1Text, styles.blackText)}>
            Download the Source Code
          </h1>
          <p className={classNames(styles.pText, styles.blackText)}>
            Get the full source code on GitHub
          </p>
        </div>
        <button className={styles.btnPrimary}>Source Code</button>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="download image"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}
