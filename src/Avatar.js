import React from "react";
import ColorPicker from "./ColorPicker";

const Avatar = ({ avatar, setColor }) => {
  return (
    <div className="col-sm text-center" id="avatar">
      <img alt="Avatar" src={avatar.src} />
      <ColorPicker setColor={setColor} />
    </div>
  );
};

export default Avatar;
