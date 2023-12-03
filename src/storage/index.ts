import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function uploadFile(fileEndPoint: string, data: ArrayBuffer) {
  let file_path = `public${fileEndPoint}`;

  let file_size = await Bun.write(file_path, data);

  return {
    path: file_path,
    size: file_size,
  };
}
