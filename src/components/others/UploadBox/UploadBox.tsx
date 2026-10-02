import React, {type ReactNode} from "react";
import UploadIcon from "../../svg/UploadIcon";
import {type InputProps} from "../../Form/Input/types/InputProps";
import InfoIcon from "../../svg/InfoIcon";
import useInputForm from "../../Form/Input/hooks/useInputForm";
import type {InputFormPropsType} from "../../Form/Input/InputForm";
import useFileDataCard, {type UseFileDataCardProps} from "../FileDataCard/hooks/useFileDataCard";
import FileDataCard from "../FileDataCard/FileDataCard";
import InputErrorMessage from "../../Form/Input/InputErrorMessage";
import useTheme from "../ThemeManager/hooks/useTheme.ts";


export type UploadBoxProps = {
  hint?: string;
  accept?: '.xlsx,.csv' | string;
  title?: ReactNode | string;
  description?: ReactNode | string;
  bgClass?: string;
  fileCardClass?: string;
  uploadBoxClass?: string;
  formatEndAdornment?: ReactNode;
} &
  Pick<InputFormPropsType, 'fieldName' | 'rules' | 'defaultValue'> &
  Pick<UseFileDataCardProps, 'fileTypes' | 'maxFileSize'> &
  Pick<InputProps, 'errorMessage' | 'hiddenErrorMessage'>

function UploadBox(
  {
    hint, accept, title, description, bgClass, fieldName, rules, defaultValue, formatEndAdornment,
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

  const {isDarkMode} = useTheme()

  const uploadBoxElement = (
    <div className={`flex flex-col gap-y-1 ${uploadBoxClass || ''}`}>
      <div className={`
        relative border border-dashed rounded-md flex flex-col items-center gap-y-2 py-4 px-8
        ${bgClass || 'bg-slate-50 dark:bg-dark-6'} ${errorMessage ? 'border-red-500' : 'border-slate-300 dark:border-dark-2'}
      `}>
        <UploadIcon textColor={isDarkMode ? 'text-custom-gray-4' : 'text-primary'} />

        <div className='flex flex-col items-center gap-y-2 text-slate-900 dark:text-custom-gray-4'>
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

      {formatEndAdornment || accept ? (
        <div className='flex items-center justify-between gap-x-2'>
          {accept ? (
            <div className='flex items-center gap-x-1 text-slate-700 dark:text-custom-gray-3'>
              <span>پسوندهای مجاز:</span>
              <span dir='ltr'>{accept}</span>
            </div>
          ) : <div></div>}

          {formatEndAdornment || null}
        </div>
      ) : null}

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

            <p className='text-slate-500 text-xs text-justify'>
              {hint}
            </p>
          </div>
        </div>
      ) : uploadBoxElement}

      {!hiddenErrorMessage && (
        <InputErrorMessage errorMessage={errorMessage || ''}/>
      )}
    </>
  )
}

export default UploadBox
