import React, { useState, useEffect } from "react";
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from "./firebase";


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h1>Home</h1>
            </div>

            <Tweetbox />

        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
           
          
        </div>
    )
}

export default Feed;
