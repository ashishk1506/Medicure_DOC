const { BlobServiceClient } = require("@azure/storage-blob");
const account = "edurekablobstorage123";
const sas =
  "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2021-12-29T14:05:57Z&st=2021-12-29T06:05:57Z&spr=https&sig=%2FsH85lTCdbcMNRo8WgDwd9jmAZrY8KRwvGxYJXpu2r8%3D";
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net${sas}`
);
const containerName = "medicure";

  async function main() {
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const content = "Hello world!";
    const blobName = "newblob";
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.uploadBrowserData(content, content.length);
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);   
    console.log(blockBlobClient.url)
}
    main();
  