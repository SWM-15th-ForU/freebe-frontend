import { ACCEPTED_IMAGE } from "@/constants/common/common";
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

export function validatingFiles(inputFiles: FileList | null): {
  isOver: boolean;
  selectedImages: FormImage[];
} {
  if (inputFiles === null) {
    return { isOver: false, selectedImages: [] };
  }
  const filesArray = Array.from(inputFiles);
  return {
    isOver:
      filesArray.filter((file) => file.size > ACCEPTED_IMAGE.size).length > 0,
    selectedImages: getFormImageFromFiles(
      filesArray.filter((file) => file.size <= ACCEPTED_IMAGE.size),
    ),
  };
}
