import React, { useState } from "react";

const {
  BlobServiceClient,
} = require("@azure/storage-blob");
const account = process.env.REACT_APP_BLOBSTORAGE_ACCOUNT;
const sas = process.env.REACT_APP_BLOB_SASKEY;
const containerName = process.env.REACT_APP_BLOB_CONTAINER;

const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net${sas}`
);

export const Upload = () => {
  const [doc, setDoc] = useState(null);

  async function main() {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = doc.name;
    const blockBlobClient = containerClient.getBlockBlobClient(doc.name);
    const options = { blobHTTPHeaders: { blobContentType: doc.type } };
    const uploadBlobResponse = blockBlobClient.uploadData(doc, options);
    console.log(
      `Upload block blob ${blobName} successfully`,
      uploadBlobResponse.requestId
    );
    console.log(blockBlobClient.url);
  }

  return (
    <div>
      <input
        id="image"
        type="file"
        onChange={(event) => setDoc(event.target.files[0])}
      />
      <button onClick={main}>upload</button>
    </div>
  );
};
