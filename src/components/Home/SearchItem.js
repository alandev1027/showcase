import React from "react";
import "./styles.scss";

const SearchItem = props => {
  const { item } = props;

  return (
    <div className="search-item">
      <div className="image-container">
        {item.keyArtImages && item.keyArtImages.length && (
          <img
            src={item.keyArtImages[0].url}
            alt="content_image"
            className="content-image"
          />
        )}
      </div>
      <div className="info-container">
        <div className="title-container">
          <a href={item.url ? item.url : "#"}>
            <div className="title">{item.headline ? item.headline : ""}</div>
          </a>
          <div className="class">({item.class ? item.class : ""})</div>
        </div>

        <div className="synopsis">{item.synopsis ? item.synopsis : ""}</div>

        <div className="user">
          {item.reviewAuthor ? item.reviewAuthor : ""}{" "}
          {item.lastUpdated ? `(${item.lastUpdated})` : ""}{" "}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
