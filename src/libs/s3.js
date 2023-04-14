/* require("dotenv").config();

const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");

const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

const client = new S3Client({
    region: 'sa-east-1',
    credentials: {
        accessKeyId: 'AKIAR47PTWJ7NO64DKEI',
        secretAccessKey: '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',
    },
});

const uploadFile = async (file) => {
    const stream = fs.createReadStream(file.tempFilePath);

    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: file.name,
        Body: stream,
    };
    const command = new PutObjectCommand(uploadParams);

    return await client.send(command);
};

const getObject = async (file) => {
    const input = {
        "Bucket": 'luchoqq-socialmedia',
        "Key": 'FRTEQ4oXMAE37Li.jpg',
      };
    const command = new GetObjectCommand(input);
    const response = await client.send(command)
    return response
};
const input = {
    Bucket: "examplebucket",
    Key: "SampleFile.txt",
    Range: "bytes=0-9",
};

module.exports = {
    uploadFile,
    getObject
};
 */