import Hero from '../section/homepage/Hero'
import CategoryGrid from '../section/homepage/category'
import ProductSlider from '../section/homepage/coffreserviceslider'
import SocialShowcase from '../section/homepage/echantilon'
import TrustBar from '../section/homepage/trustbar'
 function Home() {
  return (
    <div className='bg-white mx-auto'>
        <Hero ></Hero>
        <TrustBar></TrustBar>
        <hr />
        <CategoryGrid></CategoryGrid>
        <ProductSlider></ProductSlider>
        <SocialShowcase></SocialShowcase>

    </div>
  )
}

export default Home