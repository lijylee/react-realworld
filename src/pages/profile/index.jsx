import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile } from '@/api/profile.js';
import { getArticles } from '@/api/article.js';
import { dateFormat } from '@/utils/format.js';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { followUser, unFollowUser } from '@/api/profile.js';
import { useSelector } from 'react-redux';

const Profile = memo(() => {
  const params = useParams();
  const { username } = params;
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'my';
  const [user, setUser] = useState({});
  const [articles, setArticles] = useState([]);
  const [isMe, setIsMe] = useState(false);
  const [following, setFollowing] = useState(false);
  const navigator = useNavigate();
  const userStore = useSelector(state => state.user.value);

  // 获取Profile
  useEffect(() => {
    getProfile(username).then(({ data }) => {
      const { profile } = data;
      setUser(profile);
      setFollowing(profile.following);
    });
  }, [username]);

  useEffect(() => {
    setIsMe(userStore.username === username);
  }, [user, username]);

  // 获取articles
  useEffect(() => {
    try {
      if (tab === 'my') {
        getArticles({ author: username }).then(({ data }) => {
          setArticles(data.articles);
        });
      } else {
        getArticles({ favorited: username }).then(({ data }) => {
          setArticles(data.articles);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [username, tab]);

  async function handleEditFollow() {
    if (isMe) {
      return navigator('/settings');
    }
    if (following) {
      await unFollowUser(username);
      setFollowing(false);
      return;
    }

    await followUser(username);
    setFollowing(true);
    return;

  }

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
              <button className="btn btn-sm btn-outline-secondary action-btn" onClick={handleEditFollow}>
                <i className={isMe ? "ion-gear-a" : "ion-plus-round"}></i>
                &nbsp; {isMe ? 'Edit Profile Settings' : ((following ? 'unFollow' : 'Follow') + username)}
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
                  <Link className={"nav-link" + (tab === 'my' ? ' active' : '')} to={`/profile/${user.username}?tab=my`}>My Articles</Link>
                </li>
                <li className="nav-item">
                  <Link className={"nav-link" + (tab === 'favorited' ? ' active' : '')} to={`/profile/${user.username}?tab=favorited`}>Favorited Articles</Link>
                </li>
              </ul>
            </div>

            {
              articles.map(article => {
                return (
                  <div className="article-preview" key={article.slug}>
                    <div className="article-meta">
                      <Link to={`/profile/${article.author.username}`}><img src={article.author.image} /></Link>
                      <div className="info">
                        <Link to={`/profile/${article.author.username}`} className="author">{article.author.username}</Link>
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