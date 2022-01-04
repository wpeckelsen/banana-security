import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignIn() {
  const { login } = useContext(AuthContext);

  function formHandler(e) {
    e.preventDefault();
    login();
  }

  return (
    <>
      <h1>Inloggen</h1>
      <p>
        Log in met je email en wachtwoord!
      </p>

      <form onSubmit={formHandler}>

        <input type="email" placeholder="email"/>


        <input type="password" placeholder="00000"/>
       

        <button>Inloggen</button>
      </form>

      <p>
        Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan
        eerst.
      </p>
    </>
  );
}

export default SignIn;
