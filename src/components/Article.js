import React from "react";

const Article = ({ title, date, preview, minutes }) => {
  const minutesToRead = minutes < 30 ? minutes : Math.ceil(minutes / 10) * 10;

  const coffeeCups = "☕️".repeat(Math.ceil(minutesToRead / 5));
  const bentoBoxes = "🍱".repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>
        {minutesToRead > 30 ? bentoBoxes : coffeeCups} {minutesToRead} min read
      </small>
    </article>
  );
};

export default Article;
