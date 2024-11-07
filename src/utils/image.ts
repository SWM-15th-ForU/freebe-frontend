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
  validatedFiles: File[];
} {
  if (inputFiles === null) {
    return { isOver: false, validatedFiles: [] };
  }
  const filesArray = Array.from(inputFiles);
  return {
    isOver:
      filesArray.filter((file) => file.size > ACCEPTED_IMAGE.size).length > 0,
    validatedFiles: filesArray.filter(
      (file) => file.size <= ACCEPTED_IMAGE.size,
    ),
  };
}

const MAX_WIDTH_UPLOAD = 1000;
const MAX_HEIGHT_UPLOAD = 1000;

async function resizeImage(file: File): Promise<File | null> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      let targetWidth = img.width;
      let targetHeight = img.height;

      if (targetWidth > MAX_WIDTH_UPLOAD) {
        targetHeight *= MAX_WIDTH_UPLOAD / targetWidth;
        targetWidth = MAX_WIDTH_UPLOAD;
      }
      if (targetHeight > MAX_HEIGHT_UPLOAD) {
        targetWidth *= MAX_HEIGHT_UPLOAD / targetHeight;
        targetHeight = MAX_HEIGHT_UPLOAD;
      }
      const canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("failed to use canvas"));

      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      canvas.toBlob((blob) => {
        if (!blob) return reject(new Error("failed to extract blob"));
        const resizedFile = new File([blob], file.name, { type: file.type });
        resolve(resizedFile);
      }, file.type);
    };

    img.onerror = () => reject(new Error("failed to load image"));
  });
}

export async function resizeImages(files: File[]): Promise<File[]> {
  const resizedFiles: File[] = [];

  files.map(async (file) => {
    const resizedFile = await resizeImage(file);
    if (resizedFile) resizedFiles.push(resizedFile);
  });

  return resizedFiles;
}
