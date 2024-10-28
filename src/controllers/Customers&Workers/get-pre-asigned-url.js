import s3Client from "../../config/aws-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand } from "@aws-sdk/client-s3";
const { AWS_BUCKET_NAME } = process.env;

const getPreAsignedUrl = async (req, res) => {
  try {
    const { name } = req.body;
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: name,
      ACL: "bucket-owner-full-control",
    };
    const command = new PutObjectCommand(params);
    const presignedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });
    return res.status(200).json({
      data: presignedUrl,
      success: true,
      message: "Get url Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export default getPreAsignedUrl;
