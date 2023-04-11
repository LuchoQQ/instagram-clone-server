require("dotenv").config();

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;

const client = new S3Client({ region: "REGION" });

const uploadFile = async (pathFile) => {
    const command = new PutObjectCommand(pathFile);

    return await client.send(command);
};

module.exports = {
    uploadFile,
};
