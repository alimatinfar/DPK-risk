
function downloadFileFromFile(file: any, customFileName?: string) {
  const url = URL.createObjectURL(file); // ایجاد لینک دانلود مستقیم از فایل
  const link = document.createElement("a");
  link.href = url;
  link.download = customFileName || file.name; // تنظیم نام فایل برای دانلود
  link.click(); // شروع دانلود
  URL.revokeObjectURL(url);
}

export default downloadFileFromFile;
