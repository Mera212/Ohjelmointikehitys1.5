import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import "./Card.css";
import back from "../assets/back.png";

const Card = ({card, handleCardClick, disabled}) => {

  return (
    <button className={`card ${card.matchFound ? "matched" : ""}`} disabled={disabled} onClick={handleCardClick} data-id={card.id}>
      <div className="front side">
        <img src={back} alt="back" width="60" />
      </div>
      <div className="side back">
      <img src={card.pic} alt= "card" widht="60"/>
      </div>
    </button>
  )
}
export default Card