import React, { useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const { BlobServiceClient } = require("@azure/storage-blob");
const account = process.env.REACT_APP_BLOBSTORAGE_ACCOUNT;
const sas = process.env.REACT_APP_BLOB_SASKEY;
const containerName = process.env.REACT_APP_BLOB_CONTAINER;
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net${sas}`
);

export const Upload = (props) => {
  const [file, setFile] = useState(null);

  const main = async () => {
    const patientRef = doc(db, "patient", props.id);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = file.name;
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    const uploadBlobResponse = await blockBlobClient.uploadData(file, options);
    console.log(
      `Upload block blob ${blobName} successfully`,
      uploadBlobResponse.requestId
    );
    await updateDoc(patientRef, {
      link: blockBlobClient.url,
      timestamp: serverTimestamp(),
    });
    console.log(blockBlobClient.url);
    console.log(`id : ${props.id}`);
    props.refreshList()
  };

  return (
    <div>
      <input
        id="image"
        type="file"
        onChange={(event) => setFile(event.target.files[0])}
      />
      <button onClick={main}>upload</button>
    </div>
  );
};
