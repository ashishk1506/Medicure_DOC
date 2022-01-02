import logo from './logo.svg';
import './App.css';
// import { auth, signInWithGoogle } from './firebase/firebase.config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GoogleLoginButton} from './components/UI/GoogleLoginButton';
import { LoginPage } from './components/User/LoginPage';
import {Upload } from './components/upload/Upload';
import {PatientList} from './components/Patient/PatientList';
import { PatientPortal } from './components/Patient/PatientPortal';
import {AddPatient} from './components/Patient/AddPatient';
function App() {
  return (
    <div className="App">
      {/* <GoogleLoginButton login = {signInWithGoogle}/> */}
      <Router>
        <h1>This is Medicure</h1>
        <Routes>
          <Route path="/patient" element={<PatientList/>}> PatientList</Route>
          <Route path="/upload" element={<Upload/>}></Route>
          <Route path="/addPatient" element={<AddPatient/>}></Route>
          <Route path="/patient/:patientID" element={<PatientPortal/>}></Route>
        </Routes>
      </Router>
      {/* <LoginPage />  */}
      {/* <Upload/>
      <PatientList/> */}
    </div>
  );
} 

export default App;
