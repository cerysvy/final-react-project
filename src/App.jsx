import React, { useState, useEffect } from 'react';
import styles from "./App.module.scss";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {

  const [claims, setClaims] = useState([]);

  const getClaims = () => {
    fetch("http://localhost:8080/claims")
      .then(response => response.json())
      .then(json => setClaims(json.slice(0, 5)))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getClaims();
  }, []);

  return (
    <>
      <div>
      <Nav />
      </div>
      <section>
        <Intro />
      </section>
      <section className={styles.cardContainer}>
      {claims[0] ? claims.map(claim => <Card claim = {claim} />) : <h1>loading</h1>}
      </section>
      <section className={styles.formContainer}>
      <Form />
      </section>
    </>
  )
}

export default App
