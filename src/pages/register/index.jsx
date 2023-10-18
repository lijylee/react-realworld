import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleErrors } from "@/utils/util";
import { register } from "@/api/user";

const Register = memo(() => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigator = useNavigate();
  const submit = async (e) => {
    try {
      await register({ username, email, password });
      navigator("/login");
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            {errors && (
              <ul className="error-messages">{handleErrors(errors)}</ul>
            )}

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="button"
                onClick={submit}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Register;
