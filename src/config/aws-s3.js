import { S3Client } from "@aws-sdk/client-s3";
const { AWS_ACCESS_KEY, AWS_SECRET_KEY } = process.env;

const credentials = {
  region: "us-east-1",
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
};

const s3Client = new S3Client(credentials);

export default s3Client;