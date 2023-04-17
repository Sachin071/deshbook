import React, { useState } from "react";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();


    // clean input data
    setInput('');
    setImageURL('')
  };
  return (
    <div className="fb__messageSender">
      <div className="fb__messageSender-top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pF78B6YFE0EUucEB3DTkYCJwAjmyLXV3vAxSu2OOjrB_Ning5OUeHsJluyLC3H4xTho&usqp=CAU"
          alt="images"
        />
        <form>
          <input
            className="fb__messageSender-top__input"
            type="text"
            placeholder="What's on your mind ?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input placeholder="image URL {optional}"
            value={imageURL}
            onChange = {(e)=> setImageURL(e.target.value)}
          /> 
          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="fb__messageSender-bottom">
        <div className="fb__messageSender-bottom__option">
          <i
            class="bi bi-camera-video-fill"
            style={{ color: "red", fontSize: "large" }}
          />
          <h3>Live Video</h3>
        </div>
        <div className="fb__messageSender-bottom__option">
          <i
            class="bi bi-images"
            style={{ color: "green", fontSize: "large" }}
          />
          <h3>Photo/Video</h3>
        </div>
        <div className="fb__messageSender-bottom__option">
          <i
            class="bi bi-emoji-smile"
            style={{ color: "orange", fontSize: "large" }}
          />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
