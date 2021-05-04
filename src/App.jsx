import React from 'react';
import styles from "./App.module.scss";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {

  return (
    <>
      <div>
      <Nav />
      </div>
      <section>
        <Intro />
      </section>
      <section className={styles.cardContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      </section>
      <section className={styles.formContainer}>
      <Form />
      </section>
    </>
  )
}

export default App
