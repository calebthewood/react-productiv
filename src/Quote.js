import React from "react";

function Quote({ quote }) {
  return (
    <div>
      {quote.text} -{quote.author}
    </div>
  );
}

export default Quote;
