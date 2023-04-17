import React,{useState} from 'react';

const Post = ({profilePic,image,username,timestamp,message}) => {

    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(count+1);
    }
  return (
    <div className='fb__post'>
        <div className="fb__post-top">
            <img src={profilePic} alt="image" 
                className='fb__post-top__avatar'
            />
            <div className="fb__post-top__info">
                <h3>{username}</h3>
                {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                <p>Timestamp...</p>
            </div>
        </div>
        <div className="fb__post-bottom">
            <p>{message}</p>
        </div>
        <div className="fb__post-image">
            <img src={image} alt="fdfdf" />
        </div>
        <div className="fb__post-options">
            <div className="fb__post-option" onClick={() => counter()}>
                <i class="bi bi-hand-thumbs-up-fill" />
                <p>Like {count}</p>
            </div>
            <div className="fb__post-option">
                <i class="bi bi-chat-left-dots" />
                <p>Comment</p>
            </div>
            <div className="fb__post-option">
                <i class="bi bi-send-fill" />
                <p>Share</p>
            </div>
            <div className="fb__post-option">
                <i class="bi bi-person-circle" />
                <i class="bi bi-chevron-down" />
                
            </div>
        </div>
    </div>
  )
}

export default Post