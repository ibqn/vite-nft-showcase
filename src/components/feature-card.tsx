import { styles } from '@/styles'
import { type FunctionComponent } from 'react'

export type FeatureCardProps = {
  iconUrl: string
  iconText: string
}

export const FeatureCard: FunctionComponent<FeatureCardProps> = ({
  iconUrl,
  iconText,
}) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)
