
function toastPromise() {
  return new Promise((resolve) => {
    (async () => {
      const {toast} = await import("react-toastify");
      resolve(toast);
    })()
  })
}

export default toastPromise