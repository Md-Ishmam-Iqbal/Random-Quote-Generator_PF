import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import Socials from "./Socials";

let nIntervalId;
let readMoreCutOff = 60; // 60 placeholder for now

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [statement, setStatement] = useState("");
  const [readMore, setReadMore] = useState(false);

  const fetchStatement = () => {
    const url = "https://api.adviceslip.com/advice";
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        const { advice } = response.data.slip;
        setIsLoading(false);
        setStatement(advice);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchStatement();
  }, []);

  const startPeriodicalFetch = () => {
    nIntervalId = setInterval(fetchStatement, 60 * 1000);
  };

  const stopPeriodicalFetch = () => {
    clearInterval(nIntervalId);
    nIntervalId = null;
  };

  const handlePeriodicFetchClick = (event) => {
    const value = event.target.checked;
    if (value) {
      startPeriodicalFetch();
    } else {
      stopPeriodicalFetch();
    }
  };

  const renderStatement = (
    <h1 className="statement">
      {readMore ? statement : `${statement.substring(0, readMoreCutOff)}`}
    </h1>
  );

  const renderButton = () => {
    if (statement.length > readMoreCutOff) {
      return (
        <p>
          <button className="button" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      );
    }
  };

  return (
    <section className="app">
      <div className="card">
        {isLoading ? <LoadingSpinner /> : renderStatement}
        {renderButton()}
      </div>
      <button className="button" onClick={fetchStatement}>
        <span>GIVE ME ADVICE</span>
      </button>
      <div className="checkbox">
        <input
          type="checkbox"
          id="checkbox_id"
          onChange={handlePeriodicFetchClick}
        />
        <label htmlFor="checkbox_id" className="noselect">
          Autofetch random statement per minute
        </label>
      </div>
      <Socials />
    </section>
  );
}

export default App;
