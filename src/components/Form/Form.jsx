import React from 'react';
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div>
      <form className={styles.form} action="">
        <h1 className={styles.formHeader}>ADD A REVIEW:</h1>
        <div className={styles.formContents}></div>
        <input type="text" name="reviewName" placeholder="Your name..."/>
        <label htmlFor="type">What type of insurance would you like to review?</label>
        <select className={styles.types} id="types">
        <option value="" disabled selected>Choose a type</option>
          <option value="motor">Motor</option>
          <option value="home">Home</option>
          <option value="travel">Travel</option>
          <option value="pet">Pet</option>
        </select>
        <textarea type="text" className={styles.review} placeholder="Your review..."></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
