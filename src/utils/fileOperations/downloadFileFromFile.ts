
function downloadFileFromFile(file: any) {
  const url = URL.createObjectURL(file); // ایجاد لینک دانلود مستقیم از فایل
  const link = document.createElement("a");
  link.href = url;
  link.download = file.name; // تنظیم نام فایل برای دانلود
  link.click(); // شروع دانلود
  URL.revokeObjectURL(url);
}

export default downloadFileFromFile;