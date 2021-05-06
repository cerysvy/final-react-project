import React, { useState, useEffect} from 'react';
import styles from "./Form.module.scss";

const Form = () => {

  // const[numOfInputs, setNumOfInputs] = useState(1);
  const[name, setName] = useState("");
  const[location, setLocation] = useState("");
  const[types, setTypes] = useState({});
    // { label: "Motor", value: "Motor"}, { label: "Home", value: "Home"}, { label: "Travel", value: "Travel"}, { label: "Pet", value: "Pet"}
  const[review, setReview] = useState("");

  const submitReview = (event) => {
    event.preventDefault();
    addUserReview();
    window.location.reload();
  }

  const addUserReview = () => {
    fetch("https://cerys-api-dot-shweta-312709.nw.r.appspot.com/claim", {
      method: 'POST',
      body: JSON.stringify({
        "name": name,
        "location": location,
        "type": types,
        "review": review
    }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .catch(error => console.log(error))

  }

  return (
    <div>
      <form className={styles.form} action="">
        <h1 className={styles.formHeader}>ADD A REVIEW:</h1>
        <div className={styles.formContents}></div>
        <input onInput={(event) => setName(event.target.value)} type="text" name="reviewName" placeholder="Your name..."/>
        <input onInput={(event) => setLocation(event.target.value)} type="text" name="reviewLocation" placeholder="Your location..."/>
        <label htmlFor="types">What type of insurance would you like to review?</label>
        <select onClick={(event) => setTypes(event.target.value)} className={styles.types} id="type">
        <option value="" disabled selected>Choose a type</option>
          <option value="Motor">Motor</option>
          <option value="Home">Home</option>
          <option value="Travel">Travel</option>
          <option value="Pet">Pet</option>
        </select>
        <textarea onInput={(event) => setReview(event.target.value)} type="text" className={styles.review} placeholder="Your review..."></textarea>
        <button onClick={(event) => submitReview(event)} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
