import "./App.css";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase.init";
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [googleInfo, setGoogleInfo] = useState({});
  const [githubInfo, setGithubInfo] = useState({});
  const [facebookInfo, setFacebookInfo] = useState({});

  const googleProvider = new GoogleAuthProvider();

  const facebookProvider = new FacebookAuthProvider();

  const githubProvider = new GithubAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((credential) => {
        const user = credential.user;
        setGoogleInfo(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((credential) => {
        const user = credential.user;
        setGithubInfo(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const facebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(credential => {
        const user = credential.user
        setFacebookInfo(user)
      })
      .catch(error => {
        const errorMessage = error.message
        console.log(errorMessage);
    })
  };
  return (
    <div className="bg-gray-100 h-[100vh]">
      <h1 className="text-4xl text-sky-500 font-bold text-center py-8">
        Please Log In
      </h1>
      <div className="border border-sky-500 shadow w-2/3 p-6 rounded-md mx-auto h-80">
        <img
          className="mx-auto w-36 h-36 rounded-full object-cover"
          src={
            googleInfo.photoURL ||
            githubInfo.photoURL ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU"
          }
          alt=""
        />
        <div className="mt-4">
          <p className="text-2xl">
            <span className="font-bold">Name: </span>
            {googleInfo.displayName ||
              githubInfo.displayName ||
              facebookInfo.displayName}
          </p>
          <p className="text-2xl">
            <span className="font-bold">E-mail: </span>{" "}
            {googleInfo.email || githubInfo.email || facebookInfo.email}
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10 gap-8">
        <button
          onClick={googleSignIn}
          className="text-3xl hover:text-sky-500 transition-all ease-in-out"
        >
          <BsGoogle />
        </button>
        <button
          onClick={facebookSignIn}
          className="text-3xl hover:text-sky-500 transition-all ease-in-out"
        >
          <BsFacebook />
        </button>
        <button
          onClick={githubSignIn}
          className="text-3xl hover:text-sky-500 transition-all ease-in-out"
        >
          <BsGithub />
        </button>
      </div>
    </div>
  );
}

export default App;
