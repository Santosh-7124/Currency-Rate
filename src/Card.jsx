import React, { useState, useEffect } from "react";
import "./App.css";

const Card = ({ number, name, rate}) => {
  return (
    <div className="card">
    <div className="card-bg">
<p>{number + " . "+name}</p>
      <span>{rate.toFixed(2)}</span>
    </div>
      
    </div>
  );
};

export default Card;