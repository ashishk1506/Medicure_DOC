import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

export const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const patientCollectionRef = collection(db, "patient");

  const getPatientList = async () => {
    const patientList = await getDocs(patientCollectionRef);
    setPatients(
      patientList.docs.map((list) => {
        return { id: list.id, ...list.data() };
      })
    );
  };
  useEffect(() => {
    getPatientList();
    console.log(patients);
  }, []);


  return (
    <div>
   
      {patients.map((data) => {
        return (
          <div>
            <h1>{data.name}</h1>
            <h2>{data.id}</h2>
            <Link to={`/patient/${data.id}`}>more</Link>
          </div>
        );
      })}
    </div>
  );
};
