import { FormImage } from "product-types";

export function getUrlFromFile(file: File) {
  return URL.createObjectURL(file);
}

export function getUrlFromFiles(files: File[]) {
  return files.map((file) => getUrlFromFile(file));
}

export function getFormImageFromFiles(files: File[]): FormImage[] {
  return files.map((file) => {
    return {
      url: URL.createObjectURL(file),
      file,
    };
  });
}
