import React, { useState } from "react";
import axios from "axios";
import Quote from "./Quote";
const API_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteApp() {
  const [quoteShowing, setQuoteShowing] = useState(false);
  const [quote, setQuote] = useState("");

  async function showNewQuote() {
    setQuoteShowing(true);
    const data = await axios.get(API_URL);
    const quote = data.data.quote;
    setQuote(quote);
  }

  const btnStyle = {
    border: "1px solid white",
    color: "white",
    backgroundColor: "transparent"
  }

  return (
    <div className="container">
      {quoteShowing && <Quote quote={quote} />}
      <button onClick={showNewQuote} style={btnStyle}>
        {quoteShowing ? "Nu quote" : "Click here for an inspirational quote!"}{" "}
      </button>
    </div>
  );
}

export default QuoteApp;
