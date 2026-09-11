
type Props = {
  base64Data: string;
  fileName?: string;
}

function base64ToFile(
  {base64Data, fileName = 'file'}: Props
) {
  const [metadata, data] = base64Data.split(',');

  const mimeType = metadata.match(/:(.*?);/)?.[1] || 'application/octet-stream';

  const binaryString = atob(data);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return new File([bytes], fileName, {
    type: mimeType,
  });
}

export default base64ToFile;
