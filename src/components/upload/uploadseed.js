const { BlobServiceClient } = require("@azure/storage-blob");
const account = "";
const sas = "";
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
  