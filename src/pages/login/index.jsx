import React, { memo, useState } from 'react';
import { login } from '../../api/user';
import { saveUserToStorage } from '@/utils/storage';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/user/userSlice';

const Login = memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigator = useNavigate();
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const dispatch = useDispatch();
  const submit = async e => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      const user = data.user;
      dispatch(setUser(user));
      saveUserToStorage(user);
      navigator(from || '/home');
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };
  const handleErrors = errors => {
    const errorLiAry = [];
    for (const key in errors) {
      if (Object.hasOwnProperty.call(errors, key)) {
        const errorAry = errors[key];
        for (const error of errorAry) {
          errorLiAry.push(<li key={error}>{key + ':' + error}</li>);
        }
      }
    }
    return errorLiAry;
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            {
              errors && <ul className="error-messages">
                {handleErrors(errors)}
              </ul>
            }

            <form>
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
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </fieldset>
              <button
                type='button'
                className="btn btn-lg btn-primary pull-xs-right"
                onClick={e => submit(e)}
              >Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;