import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { Upload } from "../upload/Upload";

export const PatientPortal = () => {
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    link: "",
  });
  let { patientID } = useParams();
  const patientRef = doc(db, "patient", patientID);
  const getPatientDetails = async () => {
    const docSnap = await getDoc(patientRef);
    if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      setPatientDetails({ id: docSnap.id, ...docSnap.data() });
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    getPatientDetails();
  }, []);

  return (
    <div>
      {patientDetails.name}
      <h2> {patientDetails.age}</h2>
      {patientDetails.link}
      <Upload id={patientDetails.id} refreshList={getPatientDetails}/>
    </div>
  );
};
