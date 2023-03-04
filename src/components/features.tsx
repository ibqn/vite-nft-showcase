import { assets } from '@/assets'
import { styles } from '@/styles'
import { classNames } from '@/utils'
import { FeatureCard } from './feature-card'

export const Features = () => {
  return (
    <div
      className={classNames(
        styles.section,
        styles.bgPrimary,
        'bg-banner03',
        styles.bgImage
      )}
    >
      <div className={classNames(styles.subSection, 'flex-col text-center')}>
        <div>
          <h1 className={classNames(styles.h1Text, styles.whiteText)}>
            Technologies
          </h1>
          <p className={classNames(styles.pText, styles.whiteText)}>
            ProNef has been developed using a cross-platform technology, React
            Native.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  )
}
