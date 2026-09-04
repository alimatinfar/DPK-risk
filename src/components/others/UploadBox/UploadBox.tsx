import React, {type ReactNode} from "react";
import UploadIcon from "../../svg/UploadIcon";
import {type InputProps} from "../../Form/Input/types/InputProps";
import InfoIcon from "../../svg/InfoIcon";
import useInputForm from "../../Form/Input/hooks/useInputForm";
import type {InputFormPropsType} from "../../Form/Input/InputForm";
import useFileDataCard, {type UseFileDataCardProps} from "../FileDataCard/hooks/useFileDataCard";
import FileDataCard from "../FileDataCard/FileDataCard";
import InputErrorMessage from "../../Form/Input/InputErrorMessage";


export type UploadBoxProps = {
  hint?: string;
  accept?: '.xlsx,.csv' | string;
  title?: ReactNode | string;
  description?: ReactNode | string;
  bgClass?: string;
  fileCardClass?: string;
  uploadBoxClass?: string;
} &
  Pick<InputFormPropsType, 'fieldName' | 'rules' | 'defaultValue'> &
  Pick<UseFileDataCardProps, 'fileTypes' | 'maxFileSize'> &
  Pick<InputProps, 'errorMessage' | 'hiddenErrorMessage'>

function UploadBox(
  {
    hint, accept, title, description, bgClass, fieldName, rules, defaultValue,
    fileTypes, maxFileSize, errorMessage, fileCardClass, uploadBoxClass, hiddenErrorMessage
  }: UploadBoxProps
) {

  const {
    value, onChange
  } = useInputForm({
    fieldName, rules, defaultValue
  })

  const {
    inputRef, onChangeFileHandler, removeFileData
  } = useFileDataCard({
    fileTypes, maxFileSize, setFileData: onChange, fileData: value
  })

  const uploadBoxElement = (
    <div className={`
      relative border border-dashed rounded-md flex flex-col items-center gap-y-2 py-4 px-8
      ${bgClass || 'bg-gray-50'} ${uploadBoxClass || ''} ${errorMessage ? 'border-red-500' : 'border-gray-300'}
    `}>
      <UploadIcon/>

      <div className='flex flex-col items-center gap-y-2 text-gray-900'>
        <p className='font-bold'>
          {title || 'بارگذاری فایل'}
        </p>

        <p className='text-sm text-center'>
          {description || (
            <>
              برای بارگذاری <span className='text-accent-saderat'>اینجا</span> کلیک کنید یا فایل را اینجا بکشید
            </>
          )}
        </p>
      </div>

      <input
        ref={inputRef}
        {...accept && {accept}}
        onChange={onChangeFileHandler}
        type="file"
        className='absolute w-full h-full top-0 right-0 opacity-0 cursor-pointer'
      />
    </div>
  )

  return value ? (
    <div className={`${fileCardClass || 'pb-4'}`}>
      <FileDataCard
        fileData={value}
        removeFileData={removeFileData}
      />
    </div>
  ) : (
    <>
      {hint ? (
        <div className='space-y-2'>
          {uploadBoxElement}

          <div className='flex items-center space-x-1 space-x-reverse'>
            <InfoIcon/>

            <p className='text-gray-500 text-xs text-justify'>
              {hint}
            </p>
          </div>
        </div>
      ) : uploadBoxElement}

      {!hiddenErrorMessage && (
        <InputErrorMessage errorMessage={errorMessage || ''} />
      )}
    </>
  )
}

export default UploadBox
