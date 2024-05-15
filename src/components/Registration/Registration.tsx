import './style.css';
import { useState } from 'react';

interface User {
  email: any;
  username: string;
  password: string;
  passwordConfirm: string;
}

export const Registration: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      username: e.target.value,
    });
  };

  const handlePassworldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handlePassworldConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUser({
      ...user,
      passwordConfirm: e.target.value,
    });
  };

  return (
    <>
      <form className="form">
        <div className="title">REGISTRATION</div>
        <div className="input-container ic1">
          <input
            className="input"
            type="email"
            placeholder=" "
            onChange={handleEmailChange}
          />
          <div className="cut"></div>
          <label className="placeholder">Email Address</label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            type="text"
            placeholder=" "
            onChange={handleNameChange}
          />
          <div className="cut"></div>
          <label className="placeholder">User Name</label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            type="password"
            placeholder=" "
            onChange={handlePassworldChange}
          />
          <div className="cut"></div>
          <label className="placeholder">Password</label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            type="password"
            placeholder=" "
            onChange={handlePassworldConfirmChange}
          />
          <div className="cut"></div>
          <label className="placeholder">Confirm Password</label>
        </div>
        <button className="submit">REGISTER</button>
        <p>Email: {user.email}</p>
        <p>Name: {user.username}</p>
        <p>Password: {user.password}</p>
        <p>PasswordConfirm: {user.passwordConfirm}</p>
      </form>
    </>
  );
};
