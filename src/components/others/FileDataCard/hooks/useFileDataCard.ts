import {useRef, useState} from "react";
import getFileFromEvent from "../../../../utils/fileOperations/getFileFromEvent.ts";
import toastPromise from "../../../../utils/toastPromise";
import getFileType from "../../../../utils/fileOperations/getFileType.ts";
import getFileSize, {getFormattedFileSize} from "../../../../utils/fileOperations/getFileSize.ts";
import getFileName from "../../../../utils/fileOperations/getFileName.ts";


export type UploadFileDataType = {
  size: string;
  name: string;
  data: any;
} | undefined

export type UseFileDataCardProps = {
  fileTypes?: string[];
  maxFileSize: number;//as KB
  setFileData: (value: UploadFileDataType) => void;
  fileData: UploadFileDataType;
}

function useFileDataCard(
  {fileTypes, maxFileSize, setFileData, fileData}: UseFileDataCardProps
) {

  const inputRef = useRef<HTMLInputElement>(null as unknown as HTMLInputElement)

  async function onChangeFileHandler(e: any) {
    const file = getFileFromEvent(e); // فایل انتخاب شده
    const errorFileToastId = 'errorFileToastId';

    const toast = await toastPromise()

    if (!file) return toast.error?.('فایلی یافت نشد')

    if (fileTypes && !fileTypes.includes(getFileType(file))) return toast.error?.('نوع فایل مجاز نیست', {toastId: errorFileToastId})

    if (getFileSize(file) >= maxFileSize) return toast.error?.('حجم فایل بیشتر از حد مجاز است', {toastId: errorFileToastId})

    setFileData({
      size: getFormattedFileSize(file),
      name: getFileName(file),
      data: file
    })
  }

  function removeFileData() {
    if (inputRef.current) {
      inputRef.current.value = ""
    }
    setFileData(undefined)
  }

  return {
    onChangeFileHandler, removeFileData, inputRef
  }
}

export default useFileDataCard
