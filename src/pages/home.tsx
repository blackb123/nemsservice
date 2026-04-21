import Hero from '../section/homepage/Hero'
import CategoryGrid from '../section/homepage/category'
import ProductSlider from '../section/homepage/coffreserviceslider'
import SocialShowcase from '../section/homepage/echantilon'
import TrustBar from '../section/homepage/trustbar'
import FullWidthMap from '../section/homepage/map'
import { SEO } from '../components/SEO'

function Home() {
  return (
    <>
      <SEO
        title="Nem's Service | Impression & Articles de Bureau au Cameroun"
        description="Nem's Service - Spécialiste en impression, articles de bureau et fournitures bureaucratiques au Cameroun. Découvrez nos services d'impression et documents administratifs à Yaoundé et Douala."
        keywords="impression cameroun, articles bureau, fournitures scolaires, documents administratifs, photocopie, reliure, Yaoundé, Douala"
        url="https://nemsservice.com/"
        type="website"
      />
      <div className='bg-white mx-auto'>
          <Hero />
          <TrustBar />
          <hr />
          <CategoryGrid />
          <ProductSlider />
          <SocialShowcase />
          <FullWidthMap />
      </div>
    </>
  )
}

export default Home