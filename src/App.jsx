import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import AboutUs from './pages/aboutUs/aboutUs'
import AdditionalServices from './pages/additionalServices/additionalServices'
import AboutOurCenter from './pages/aboutOurCenter/aboutOurCenter'
import OurTeam from './pages/ourTeam/ourTeam'
import InfoCard from './pages/infoCard/infoCard'
import AboutCenter from './pages/aboutCenter/aboutCenter'
import Reviews from './pages/reviews/reviews'
import Documents from './pages/documents/documents'
import Parents from './pages/parents/parents'
import Nutrition from './pages/nutrition/nutrition'
import News from './pages/news/news'
import ThreeDTur from './pages/3DTur.jsx/3DTur'
import Programm from './pages/programm/programm'
import PhotoAndVideo from './pages/photoAndVideo.jsx/photoAndVideo'
import BasicSchedule from './pages/basicSchedule/basicSchedule'
import DailyRoutine from './pages/dailyRoutine/dailyRoutine'
import Contacts from './pages/contacts/contacts'
import ScheduleAdditionalServices from './pages/scheduleAdditionalServices/scheduleAdditionalServices'
import LayoutAdmin from './layout/layoutAdmin'
import PersonData from './pagesAdmin/personData'
import Adventages from './pagesAdmin/adventages'
import { Video } from 'lucide-react'
import VideoAdmin from './pagesAdmin/video'
import WorkScheduleAdmin from './pagesAdmin/workSchedule'
import ReviewsAdmin from './pagesAdmin/reviewsAdmin'
import KidCardsAdmin from './pagesAdmin/kidCardsAdmin'
import CenterKidsAdmin from './pagesAdmin/centerKidsAdmin'
import Registration from './components/pages/registaration/registration'
import Sertificates from './pagesAdmin/sertificates'
import MenuAdmin from './pagesAdmin/menuAdmin'
import NewsAdmin from './pagesAdmin/news'
import FilesAdmin from './pagesAdmin/filesAdmin'


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <AboutUs/>
        },
        {
          path: "additionalServices",
          element: <AdditionalServices/>
        },
        {
          path: "aboutOurCenter",
          element: <AboutOurCenter/>
        },
        {
          path: "ourTeam",
          element: <OurTeam/>
        },
        {
          path: 'aboutCenter',
          element: <AboutCenter/>
        },
        {
          path: 'reviews',
          element: <Reviews/>
        },
        {
          path: 'documents',
          element: <Documents/>
        },
        {
          path: 'parents',
          element: <Parents/>
        },
        {
          path: 'nutrition',
          element: <Nutrition/>
        },
        {
          path: 'news',
          element: <News/>
        },
        {
          path: 'threeDTur',
          element: <ThreeDTur/>
        },
        {
          path: 'programm',
          element: <Programm/>
        },
        {
          path: 'photoAndVideo',
          element: <PhotoAndVideo/>
        },
        {
          path: 'basicSchedule',
          element: <BasicSchedule/>
        },
        {
          path: 'dailyRoutine',
          element: <DailyRoutine/>
        },
        {
          path: 'contacts',
          element: <Contacts/>
        },
        {
          path: 'scheduleAdditionalServices',
          element: <ScheduleAdditionalServices/>
        }
      ]
    },
    {
        path:"/admin",
        element: <Registration/>
        },
    {
      path:"/admin",
      element: <LayoutAdmin/>,
      children:[
        {
          path:"personData",
          element: <PersonData/>
        },
        {
          path: "adventages",
          element: <Adventages/>
        },
        {
          path: "workschedule",
          element: <WorkScheduleAdmin/>
        },
        {
          path: "video",
          element: <VideoAdmin/>
        },
        {
          path: "reviews",
          element: <ReviewsAdmin/>
        },
        {
          path: "kidCadrs",
          element: <KidCardsAdmin/>
        },
        {
          path: "centerKids",
          element: <CenterKidsAdmin/>
        },
        {
          path: "sertificates",
          element: <Sertificates/>
        },
        {
          path: "menu",
          element: <MenuAdmin/>
        },
        {
          path: "newsAdmin",
          element: <NewsAdmin/>
        },
        {
          path: "filesAdmin",
          element: <FilesAdmin/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
