
import { promises as fs } from 'fs';

const getFileNameWithExtension = (filePath: string, extension: string): string  => (
  filePath.endsWith(extension) 
    ? filePath
    : `${filePath}.${extension}`
)

export const fileExist = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true
  } catch {
    // Doesn´t exist
    return false;
  }
}

export const forceExtension = async (filePath: string, extension: string): Promise<string> => {
  let fixedFilePath = getFileNameWithExtension(filePath, extension);
  // If new name was generate
  if (fixedFilePath !== filePath) {
    // Grant a new file-name (to avoid overwritting user files)
    let number = 1;
    while (await fileExist(fixedFilePath)) {
      fixedFilePath = getFileNameWithExtension(`${filePath}[${number}]`, extension);
      ++number;
    }
  }
  return fixedFilePath
}

