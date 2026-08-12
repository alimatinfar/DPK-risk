
function getFileFromEvent(e:any) {
  return e.target.files[0]
}

export default getFileFromEvent;