import { FileText } from 'lucide-react'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../../slice/api/apiFiles';
import IsLoading from '../../ui/isLoading/isLoading';
import Error from '../../ui/error/error';

const Files = () => {

  const downloadFile = async (fileUrl) => {
    try {
      const response = await axios.get(fileUrl, {
        responseType: 'blob',
    });
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'file.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFiles())
  }, [dispatch])
  let {files, isLoading, error} = useSelector(state => state.FilesSlice);
  return (
    <div>
      <div className='w-[85%] m-auto text-[#8081BD] text-[20px] flex flex-col gap-2 pb-15'>
        {isLoading && (
          <IsLoading/>
        )}
        {error && (
          <Error/>
        )}
        {(!error && !isLoading) && files.map(elm => (
          <div key = {elm.id} className='flex w-[35%] items-center gap-5' onClick={() => downloadFile(elm.file)}>
            <FileText className='text-[#EA5D4A] w-20 h-20'/>
            <p className=' w-[90%]'>{elm.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Files
