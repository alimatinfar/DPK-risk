
type Props = {
  base64: string;
  fileName: string;
  mimeType?: string;
}

function downloadFileFromBase64(
  {
    base64, fileName, mimeType = "application/octet-stream"
  }: Props
) {
  const [header, data] = base64.split(",");

  const mime =
    header?.startsWith("data:") && header.includes(";base64")
      ? header.substring(5, header.indexOf(";base64"))
      : mimeType;

  const binaryString = atob(data ?? base64);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const blob = new Blob([bytes], { type: mime });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

export default downloadFileFromBase64;

