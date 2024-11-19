import { S3Client } from "@aws-sdk/client-s3";
const { AWS_ACCESS_TOKEN, AWS_SECRET_TOKEN } = process.env;

const credentials = {
  region: "us-east-1",
  credentials: {
    accessKeyId: AWS_ACCESS_TOKEN,
    secretAccessKey: AWS_SECRET_TOKEN,
  },
};

const s3Client = new S3Client(credentials);

export default s3Client;
