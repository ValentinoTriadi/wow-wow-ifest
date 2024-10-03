import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.S3_ENDPOINT ?? "",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
  },
});

export const uploadFile = async (file: File, id: string, key: string) => {
  const fileArrayBuffer = await file.arrayBuffer();
  const fileBuffer = Buffer.from(fileArrayBuffer);

  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET ?? "",
    Key: id + "/" + key,
    Body: fileBuffer,
  });

  try {
    const result = await s3Client.send(command);
    if (!result) return null;
    return id + "/" + key;
  } catch (error) {
    console.error(error);
    return null;
  }
};
