import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <CreateIcon />
        <form action="">
          <input type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
