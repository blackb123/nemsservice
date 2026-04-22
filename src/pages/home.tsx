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
        title="Nem's Service | Premier Service d'Impression et Design au Cameroun"
        description="Nem's Service - N°1 du service d'impression et design au Cameroun. Leader en impression professionnelle, design graphique et articles de bureau à Yaoundé, Douala et dans toute l'Afrique centrale."
        keywords="impression cameroun, design cameroun, service d'impression n°1 cameroun, impression professionnelle Yaoundé, impression Douala, design graphique cameroun, articles bureau, fournitures scolaires, photocopie, reliure, leader impression Afrique centrale, nems services, nems service, nem's services, nem's service, nems, nem's, nems impression, nems printing, nems bureau, nems articles, nems cameroun, nems yaoundé, nems douala, nems services cameroun, nems printing cameroun, nems impression cameroun, nems services yaoundé, nems services douala, nems office supplies, nems fournitures, nems photocopie, nems reliure, nems documents, nems services impression, nems services design, nems services bureau, nems services articles"
        url="https://nemsservices.com/"
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