import Map from "../../components/pages/aboutUs/map"
import Questions2 from "../../components/pages/aboutUs/questions2"
import NutritionMenu from "../../components/pages/nurtion/nurtionMenu"

const Nutrition = () => {
  return (
    <div>
        <div className='w-[85%] m-auto py-10'>
            <div className='flex w-1/5 justify-between'>
            <p className='text-[#334155]'>Главная</p>
            <p className='text-[#334155]'>О нас</p>
            <p className='text-[#8081BD]'>Питание</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Питание</b>
        </div>
        <NutritionMenu/>
        <Questions2 className={"text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} bgColor={"#8081BD"}/>
        <Map/>
    </div>
  )
}

export default Nutrition