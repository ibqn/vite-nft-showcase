import { FunctionComponent } from 'react'
import { Download, Features, SectionWrapper } from '@/components'
import { styles } from '@/styles'
import { classNames } from '@/utils'
import { assets } from '@/assets'

export const App: FunctionComponent = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showButton
        mockupImage={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImage={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImage={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImage={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="bg-primary banner04 flex-col items-center justify-center px-4 py-2 text-center">
        <p className={classNames(styles.pText, styles.whiteText)}>
          Made with love in <span className="bold">Berlin</span>
        </p>
      </div>
    </>
  )
}

export default App
