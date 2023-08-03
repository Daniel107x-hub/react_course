import React from "react";

function ProfileCard({ title, handle, image, description }) {
  // const {title, handle} = props; //Destructuring
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="PDA Logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={image} alt="PDA Logo" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
