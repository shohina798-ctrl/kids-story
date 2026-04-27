import { configureStore } from '@reduxjs/toolkit' 
import PersonDataSlice from '../slices/personDataSlice'
import AdventagesSlice from '../slices/adventagesSlice'
import WorkScheduleSlice from '../slices/workSchedule'
import VideoSlice from '../slices/videoSlice'
import ReviewsDataSlice from '../slices/reviewsSlice'
import KidCardsSlice from '../slices/kidCardsSlice'
import CenterKidsSlice from '../slices/centerKidsSlice'
import SertificatesSlice from '../slices/sertificatesSlice'
import MenuSlice from '../slices/menuSlice'
import NewsSlice from '../slices/newsSlice'
import FilesSlice from '../slices/filesSlice'

export const Store = configureStore({
  reducer: {
    PersonDataSlice,
    AdventagesSlice,
    WorkScheduleSlice,
    VideoSlice,
    ReviewsDataSlice,
    KidCardsSlice,
    CenterKidsSlice,
    SertificatesSlice,
    MenuSlice,
    NewsSlice,
    FilesSlice
  }
})

