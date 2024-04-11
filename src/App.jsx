import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./navbar";
import "./App.css";

function App() {
  const apiURL =
    "https://v6.exchangerate-api.com/v6/2b6f8cfe81a4cbacf8537a80/latest/USD";
  const [exchangeRates, setExchangeRates] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchExchangeRates() {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setExchangeRates(data);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    }
    fetchExchangeRates();
  }, []);

  const filteredCurrencies = exchangeRates
    ? Object.keys(exchangeRates.conversion_rates).filter((currencyCode) =>
        currencyCode.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <Navbar />
      <div className="searchBar">
        <div className="searchBar-container">
          <input
            placeholder="Search Your Currency"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="card-container">
        {filteredCurrencies.map((currencyCode, index) => (
          <Card
            key={currencyCode}
            number={index + 1} 
            name={currencyCode}
            rate={exchangeRates.conversion_rates[currencyCode]}
          />
        ))}
      </div>
    </>
  );
}

export default App;
