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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <form className="form">
        <div className="title">REGISTRATION</div>
        <div className="input-container ic1">
          <input
            className="input"
            id="email"
            type="text"
            placeholder=" "
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="placeholder">Email Address</label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            id="username"
            type="text"
            placeholder=" "
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="placeholder">User Name</label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            id="passworld"
            type="password"
            placeholder=" "
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="placeholder">Password</label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            id="passworldConfirm"
            type="password"
            placeholder=" "
            onChange={handleChange}
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
