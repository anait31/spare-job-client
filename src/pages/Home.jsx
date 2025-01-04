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
    </div>
  )
}

export default Home
