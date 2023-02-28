import React, { useState } from "react";

export const TwiterFolowCard = ({ img, userName, name, formatUserName }) => {
  const [isFollowind, setIsFollowind] = useState(false);

  const text = isFollowind ? "Siguiendo" : "Seguir";
  const classButton = isFollowind
    ? "tw-folowCard-button is-followind"
    : "tw-folowCard-button ";

  const handleClick = () => {
    setIsFollowind((old) => !old);
  };

  return (
    <article className="tw-folowCard">
      <header className="tw-folowCard-header">
        <img src={img} alt="avatar" className="tw-folowCard-img" />
        <div className="tw-folowCard-info">
          <strong>{name}</strong>
          <span className="tw-folowCard-infoUser">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={classButton} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
};
