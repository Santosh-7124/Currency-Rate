import React, { useState, useEffect } from "react";
const Navbar= ()=>{
    return (
      <>
        <div className="navBar">
          <div className="navBarlogo">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/cotton/64/currency-exchange.png"
              alt="currency-exchange"
            />
            <p>Curruncy Rates</p>
          </div>
        </div>
      </>
    );
}

export default Navbar;