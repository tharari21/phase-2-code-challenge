import React, {useState} from "react";

function Planeteer({planeteer}) {
  const [renderBio, setRenderBio] = useState(true);
  const toggleBioOrQuote = () => {
    setRenderBio(prev => !prev)
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={toggleBioOrQuote}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">
            {renderBio ? planeteer.bio : planeteer.quote}
          </p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>Age: {new Date().getFullYear() - planeteer.born}</p>
            <p>{planeteer.fromUSA ? "USA-based" : "working overseas"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
