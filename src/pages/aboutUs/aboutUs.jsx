
import OurComand from "../../banner/ourComand"
import Advantages from "../../components/pages/aboutUs/advantages"
import ReviewsAboutCenter from "../../components/pages/aboutUs/reviews"
import WorkSchedule from "../../components/pages/aboutUs/workSchedule"
import AboutOurCenter from "../../components/pages/aboutUs/aboutOurCenter"
import AdditionalServices from "../../components/pages/aboutUs/additionalServices"
import Questions from "../../components/pages/aboutUs/questions"
import Questions2 from "../../components/pages/aboutUs/questions2"
import VideoGlleryGarde from "../../components/pages/aboutUs/videoGlleryGarde"
import Map from "../../components/pages/aboutUs/map"
import Registration from "../../components/pages/aboutUs/registration"

const AboutUs = () => {
  return (
    <div>
      <Registration/>
      <WorkSchedule/>
      <Questions/>
      <AdditionalServices/>
      <VideoGlleryGarde/>
      <Advantages/>
      <OurComand/>
      <Questions2/>
      <AboutOurCenter/>
      <ReviewsAboutCenter/>
      <Map/>
    </div>
  )
}

export default AboutUs
