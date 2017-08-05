const fs = require('fs');
const s3 = require('s3');
const secrets = require('./secrets.json');

const options = {
  accessKeyId: secrets.access,
  secretAccessKey: secrets.secret,
  signatureVersion: 'v4',
  region: secrets.region
}

const AWS = require('aws-sdk'); // https://www.npmjs.com/package/aws-sdk
const awsS3Client = new AWS.S3(options);

const client = s3.createClient({
  s3Client: awsS3Client,
  maxAsyncS3: 20,     // this is the default 
  s3RetryCount: 3,    // this is the default 
  s3RetryDelay: 1000, // this is the default 
  multipartUploadThreshold: 20971520, // this is the default (20 MB) 
  multipartUploadSize: 15728640, // this is the default (15 MB) 
  s3Options: options,
});

// Sync dir
var params = {
  localDir: "public",
  deleteRemoved: true,
  s3Params: {
    Bucket: secrets.bucket
  },
};
var uploader = client.uploadDir(params);
uploader.on('error', function(err) {
  console.error("unable to sync:", err.stack);
});
uploader.on('progress', function() {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
  console.log("done uploading");
});