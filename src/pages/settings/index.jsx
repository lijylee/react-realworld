import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '@/api/user.js';
import { saveUserToStorage, removeUserFromStorage } from '@/utils/storage.js';
import { useNavigate } from 'react-router-dom';
import { setUser } from '@/store/user/userSlice';

const Settings = memo(() => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const userStore = useSelector(state => state.user.value);
  const [image, setImage] = useState(userStore?.image);
  const [username, setUsername] = useState(userStore?.username);
  const [bio, setBio] = useState(userStore?.bio);
  const [email, setEmail] = useState(userStore?.email);
  const [password, setPassword] = useState(userStore?.password);

  const updateSettings = async () => {
    const editedUser = { image, username, bio, email, password };
    try {
      const { data } = await updateUser(editedUser);
      const { user } = data;
      saveUserToStorage(user);
      dispatch(setUser(user));
      navigator(`/profile/${username}`);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    dispatch(setUser(null));
    removeUserFromStorage();
    navigator('/login');
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            {/* <ul className="error-messages">
              <li>That name is required</li>
            </ul> */}

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  onClick={e => updateSettings()}
                  type="button"
                >Update Settings</button>
              </fieldset>
            </form>
            <hr />
            <button
              className="btn btn-outline-danger"
              onClick={e => logout()}
              type="button"
            >Or click here to logout.</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Settings;