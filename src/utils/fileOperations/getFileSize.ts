
function getFileSize(file: any): number {
  //file size unit is KB
  return (file.size / 1024)
}

export function getFormattedFileSize(file: any): string {
  //file size unit is KB
  return getFileSize(file).toFixed(2)
}


export default getFileSize;