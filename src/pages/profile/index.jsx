import React, { memo, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfile } from '@/api/profile.js';
import { getArticles } from '@/api/article.js';
import { dateFormat } from '@/utils/format.js';

const Profile = memo(() => {
  // const user = useSelector(state => state.user.value);
  const params = useParams();
  const { username } = params;
  const [user, setUser] = useState({});
  const [articles, setArticles] = useState([]);

  const isMe = user && user.username === username;
  // console.log({ isMe });

  // 获取Profile
  useEffect(() => {
    getProfile(username).then(({ data }) => {
      setUser(data.profile);
    });
  }, [username]);

  // 获取articles
  useEffect(() => {
    try {
      getArticles({ author: username }).then(({ data }) => {
        console.log(data.articles);
        setArticles(data.articles);
      });

    } catch (error) {
      console.log(error);
    }
  }, [username]);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={user.image} className="user-img" />
              <h4>{user.username}</h4>
              <p>
                {user.bio}
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp; Follow {user.username}
              </button>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-gear-a"></i>
                &nbsp; Edit Profile Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">My Articles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Favorited Articles</a>
                </li>
              </ul>
            </div>

            {
              articles.map(article => {
                return (
                  <div className="article-preview" key={article.slug}>
                    <div className="article-meta">
                      <a href="/profile/eric-simons"><img src={article.author.image} /></a>
                      <div className="info">
                        <a href="/profile/eric-simons" className="author">{article.author.username}</a>
                        <span className="date">{dateFormat(article.createdAt)}</span>
                      </div>
                      <button className="btn btn-outline-primary btn-sm pull-xs-right">
                        <i className="ion-heart"></i> 29
                      </button>
                    </div>
                    <a href="/article/how-to-buil-webapps-that-scale" className="preview-link">
                      <h1>{article.title}</h1>
                      <p>{article.description}</p>
                      <span>Read more...</span>
                      <ul className="tag-list">
                        <li className="tag-default tag-pill tag-outline">realworld</li>
                        <li className="tag-default tag-pill tag-outline">implementations</li>
                      </ul>
                    </a>
                  </div>
                );
              })
            }

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Profile;