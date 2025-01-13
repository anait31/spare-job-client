import AboutUs from '../components/AboutUs'
import Carousel from '../components/Carousel'
import HowWork from '../components/HowWork'
import WorkItea from '../components/WorkItea'

const Home = () => {
  return (
    <div>
      <Carousel />
      {/* <TabCategories /> */}
      <WorkItea></WorkItea>
      <HowWork></HowWork>
      <AboutUs></AboutUs>
    </div>
  )
}

export default Home
