import React, { useState } from 'react';
import { Avatar, Divider, Carousel } from "antd";


const contentStyle = {
  height: "321px",
  margin:"0",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Card(props) {
  const {post} = props; 
  let images = post?.images.length > 2 ? post?.images.slice(0,2) :  post?.images;
  const [isLiked, setIsLiked] = useState(post?.didLike);
  const [likes, setLikes] = useState(post?.likes);
  const [comments, setComments] = useState(post?.comments);
  const now = Date.now();
  const date = new Date(post?.date).valueOf(); 
  const mins = (now - date) / (60 * 1000);
  const hours = (now - date) / (60 * 60 * 1000);
  const days = (now - date) / (60 * 60 * 24 * 1000);
  const weeks = (now - date) / (60 * 60 * 24 * 7 * 1000);
  const months = (now - date) / (60 * 60 * 24 * 7 * 30 * 1000);
  const years = (now - date) / (60 * 60 * 24 * 7 * 12 * 1000);
  let dateStr = "";
  if (years >= 1) dateStr = `${Math.floor(years)} ${Math.floor(years) === 1 ? "year" : "years" } ago`;
  else if (months >= 1) dateStr = `${Math.floor(months)} ${Math.floor(months) === 1 ? "month" : "months" } ago` ;
  else if (weeks >= 1) dateStr = `${Math.floor(weeks)} ${Math.floor(weeks) === 1 ? "week" : "weeks" } ago`;
  else if (days >= 1) dateStr = `${Math.floor(days)} ${Math.floor(days) === 1 ? "day" : "days" } ago`;
  else if (hours >= 1) dateStr = `${Math.floor(hours)} ${Math.floor(hours) === 1 ? "hour" : "hours" } ago`;
  else if (mins >= 1) dateStr = `${Math.floor(mins)} ${Math.floor(mins) === 1 ? "min" : "mins" } ago`;


  const handleLike = () => {
    setIsLiked(!isLiked);
    isLiked ? setLikes(likes-1) : setLikes(likes+1);
  }

  const handleComment = () => {
    setComments(comments + 1);
  };
  
  return (
    <div className="card" key={post.id}>
      <div className="card-header">
        <div className="card-profile-info">
          <Avatar size={40} className="avatar" src={post?.avatar} />
          <div className="user-info-wrapper">
            <div className="user-name">{post?.username}</div>
            <div className="shop-name">
              <div>{post?.shopName}</div>
              <div className="time"> ∙ {dateStr}</div>
            </div>
          </div>
        </div>
        <div className="card-description">{post?.text}</div>
      </div>
      <div className="card-body">
        <Carousel draggable arrows>
          {images?.map((image) => (
            <div key={image} className="post-image-wrapper">
              <img
                className="post-image"
                style={contentStyle}
                src={image}
                alt="image"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="card-footer">
        <div className="footer-part-one">
          <div className="button-wrapper">
            <div className="likes-btn">
              <i className="bi bi-hand-thumbs-up-fill"></i>
            </div>
            <div>{likes || 0}</div>
          </div>
          <div className="button-wrapper">{comments || 0} comments</div>
        </div>
        <Divider />
        <div className="footer-part-two">
          {isLiked ? (
            <div className="button-wrapper button-blue" onClick={handleLike}>
              <i className="bi bi-hand-thumbs-up"></i>
              <div>Like</div>
            </div>
          ) : (
            <div className="button-wrapper" onClick={handleLike}>
              <i className="bi bi-hand-thumbs-up"></i>
              <div>Like</div>
            </div>
          )}

          <div className="button-wrapper" onClick={handleComment}>
            <i className="bi bi-chat-left"></i>
            <div>Comment</div>
          </div>
        </div>
      </div>
    </div>
  );
}
