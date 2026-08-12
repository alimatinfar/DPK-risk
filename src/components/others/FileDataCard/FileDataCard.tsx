import FileIcon from "../../svg/FileIcon.tsx";
import IconClickable from "../Icon/IconClickable.tsx";
import DownloadIcon2 from "../../svg/DownloadIcon2.tsx";
import DeleteIcon from "../../svg/DeleteIcon.tsx";
import React from "react";


type Props = {
  fileName: string;
  fileSize: number | string;
  downloadFileData: () => void;
  removeFileData: () => void;
}

function FileDataCard(
  {fileName, fileSize, downloadFileData, removeFileData}: Props
) {
  return (
    <div
      className='flex items-center justify-between py-4 px-2 bg-white rounded-lg mt-4 border border-gray-300 overflow-hidden'>
      <div className='flex-1 flex items-center gap-x-2'>
        <FileIcon/>

        <div className='flex-1 flex flex-col justify-between items-start space-y-1'>
          <p className='text-sm ltr'>
            {fileName}
          </p>

          <div dir='ltr' className='text-gray-500 text-xs space-x-1'>
            <span>{fileSize}</span>
            <span>KB</span>
          </div>
        </div>
      </div>

      <div className='flex items-center space-x-reverse gap-x-2'>
        <IconClickable className='w-[34px] h-[34px]' onClick={downloadFileData}>
          <DownloadIcon2 width='100%' height='100%'/>
        </IconClickable>

        <IconClickable className='w-[34px] h-[34px]' onClick={removeFileData}>
          <DeleteIcon width='100%' height='100%'/>
        </IconClickable>
      </div>
    </div>
  )
}

export default FileDataCard