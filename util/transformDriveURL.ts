export default function transformDriveURL(driveUrl: string): string {
  const fileIdMatch = driveUrl.match(/\/d\/(.+?)\//);
  if (fileIdMatch && fileIdMatch[1]) {
    const fileId = fileIdMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return "";
}
