import React from 'react'
import Files from '../../components/pages/documents/files'
import OurCertificates from '../../banner/ourСertificates'
import Questions2 from '../../components/pages/aboutUs/questions2'
import Map from '../../components/pages/aboutUs/map'

const Documents = () => {
  return (
    <div>
        <div className='w-[85%] m-auto py-10'>
            <div className='flex w-1/5 justify-between'>
            <p className='text-[#334155]'>Главная</p>
            <p className='text-[#334155]'>О нас</p>
            <p className='text-[#8081BD]'>Документы</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Документы</b>
        </div>
        <Files/>
        <OurCertificates/>
        <Questions2 className={"text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} bgColor={"#8081BD"}/>        
        <Map/>
    </div>
  )
}

export default Documents
