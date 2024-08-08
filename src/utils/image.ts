export function getUrlFromFile(file: File) {
  return URL.createObjectURL(file);
}

export function getUrlFromFiles(files: File[]) {
  return files.map((file) => getUrlFromFile(file));
}
