import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <div>
        <p>Home</p>
      </div>
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Home;
