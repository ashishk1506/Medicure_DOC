import React, {useState} from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

export const AddPatient = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const patientCollectionRef = collection(db, "patient");
  const addPatientSubmitHandler = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(patientCollectionRef, {
      name: name,
      age: age,
    });
    console.log(name, age);
  };
  return (
    <div>
      <form>
        <label>name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <label>age</label>
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="number"
        />
        <button onClick={addPatientSubmitHandler}>submit</button>
      </form>
    </div>
  );
}
