import logo from './logo.svg';
import './App.css';
// import { auth, signInWithGoogle } from './firebase/firebase.config';
import {GoogleLoginButton} from './components/UI/GoogleLoginButton';
import { LoginPage } from './components/User/LoginPage';
import {Upload } from './components/upload/Upload';
function App() {
  return (
    <div className="App">
      {/* <GoogleLoginButton login = {signInWithGoogle}/> */}
      {/* <LoginPage /> */}
      <Upload/>
    </div>
  );
} 

export default App;
