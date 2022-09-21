import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useNavigate } from "react-router-dom";


export default function Cards(props) {
  let nav = useNavigate();
  const {posts, renderedPosts, setRenderedPosts} = props;
  let tempPosts = posts.slice(0,6); 
  const [atBottom, setAtBottom] = useState(false);
  const [postAmount, setPostAmount] = useState(6);

    

    window.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      let refIndex = Math.floor(scrollTop / 550);
      let refPost = posts[refIndex];
      let userId = refPost?.userId;
      let itemId = refPost?.id;
      if(userId && itemId) nav(`?userId=${userId}&itemId=${itemId}`);
      setAtBottom(false);

      if (clientHeight + scrollTop >= scrollHeight - 5) { 
        setAtBottom(true);
        setPostAmount(postAmount+6);
        tempPosts = posts.slice(0, postAmount);
        setRenderedPosts(tempPosts); 
      } 
    });

  return (
    <div>
      {renderedPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
