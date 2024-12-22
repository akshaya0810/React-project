import React from 'react'
import './Blogposts.css';

export default function Blogposts() {
    return (
        <div className="app">
          <h1 className="title">Blog Posts</h1>
          <p className="subtitle">Images from Freepik</p>
          <div className="posts">
            <div className="post-card">
              <img src="/GD1.jpg" alt="Post 1" className="post-image" />
              <h2 className="post-title">Post 1 Headline</h2>
              <p className="post-description">Sample small text. Lorem ipsum dolor sit amet.</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
            <div className="post-card">
              <img src="/GD2.jpg" alt="Post 2" className="post-image" />
              <h2 className="post-title">Post 2 Headline</h2>
              <p className="post-description">Sample small text. Lorem ipsum dolor sit amet.</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
            <div className="post-card">
              <img src="/GD3.jpg" alt="Post 3" className="post-image" />
              <h2 className="post-title">Post 3 Headline</h2>
              <p className="post-description">Sample small text. Lorem ipsum dolor sit amet.</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </div>
          <button className="learn-more">LEARN MORE</button>
        </div>
      );
}
