import './App.css';
import { getAuth } from "firebase/auth";
import app from "./firebase.init"
import { BsGoogle } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const auth = getAuth(app); 

function App() {
  return (
    <div>
      <h1 className='text-4xl text-sky-500 font-bold text-center my-8'>Please Log In</h1>
      <div className='border w-96 p-6 rounded-md mx-auto h-80'>
        <img className='mx-auto w-36 h-36 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU" alt="" />
        <div className='mt-4'>
        <p className='text-2xl'>Name:</p>
        <p className='text-2xl'>Email:</p>
        </div>
      </div>
      <div className='flex justify-center my-10 gap-5'>
        <div className='text-3xl hover:text-sky-500 transition-all ease-in-out'><BsGoogle/></div>
        <div className='text-3xl hover:text-sky-500 transition-all ease-in-out'><BsFacebook/></div>
        <div className='text-3xl hover:text-sky-500 transition-all ease-in-out'><BsGithub/></div>
      </div>
    </div>
  );
}

export default App;
