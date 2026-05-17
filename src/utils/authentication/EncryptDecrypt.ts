import CryptoJS from "crypto-js"

const tokenSecretKey = import.meta.env.VITE_ENCRYPT_TOKEN
export function encrypt(value: string) {
  const encryptedData = CryptoJS.AES.encrypt(value, String(tokenSecretKey))

  return encryptedData.toString()
}

export function decrypt(value: string) {
  const decryptedData = CryptoJS.AES.decrypt(value, String(tokenSecretKey))
  const parsedText = decryptedData.toString(CryptoJS.enc.Utf8)

  return parsedText
}
