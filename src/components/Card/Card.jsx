import React from 'react';
import styles from "./Card.module.scss";

const Card = (props) => {

  return (
    <div className={styles.card}>
      <p>"{props.claim.review}"</p>
      <h1>{props.claim.name}</h1>
      <h2>Location: {props.claim.location}</h2>
      <h2>Insurance type: {props.claim.type}</h2>
    </div>
  )
}

export default Card
