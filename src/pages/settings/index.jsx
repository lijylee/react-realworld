import React, { memo } from 'react';

const Settings = memo(() => {
  return (
    <div classNameName="settings-page">
      <div classNameName="container page">
        <div classNameName="row">
          <div classNameName="col-md-6 offset-md-3 col-xs-12">
            <h1 classNameName="text-xs-center">Your Settings</h1>

            <ul classNameName="error-messages">
              <li>That name is required</li>
            </ul>

            <form>
              <fieldset>
                <fieldset classNameName="form-group">
                  <input classNameName="form-control" type="text" placeholder="URL of profile picture" />
                </fieldset>
                <fieldset classNameName="form-group">
                  <input classNameName="form-control form-control-lg" type="text" placeholder="Your Name" />
                </fieldset>
                <fieldset classNameName="form-group">
                  <textarea
                    classNameName="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                  ></textarea>
                </fieldset>
                <fieldset classNameName="form-group">
                  <input classNameName="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset classNameName="form-group">
                  <input
                    classNameName="form-control form-control-lg"
                    type="password"
                    placeholder="New Password"
                  />
                </fieldset>
                <button classNameName="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
              </fieldset>
            </form>
            <hr />
            <button classNameName="btn btn-outline-danger">Or click here to logout.</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Settings;