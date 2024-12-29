import React from "react";

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
    return (
        <div>
          <img src={profilePicture} alt=""  style={{margin:"20px",height:"300px", width:"300px"}}/>
          <h2>{`${name}, ${age}`}</h2>
          <p>{location}</p>
          <p>{bio}</p>
        </div>
      );
    };

export default UserProfileCard;
