import './style.css';

interface Registrate {
  emailAddress: string;
  userName: string;
  pass: string;
  conPass: string;
}

export const Registration: React.FC<Registrate> = () => {
  return (
    <>
      <form className="form">
        <div className="title">REGISTRATION</div>
        <div className="input-container ic1">
          <input className="input" type="email" />
          <div className="cut"></div>
          <label className="placeholder">Email Address</label>
        </div>
        <div className="input-container ic2">
          <input className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label className="placeholder">User Name</label>
        </div>
        <div className="input-container ic2">
          <input className="input" type="password" placeholder=" " />
          <div className="cut"></div>
          <label className="placeholder">Password</label>
        </div>
        <div className="input-container ic2">
          <input className="input" type="password" placeholder=" " />
          <div className="cut"></div>
          <label className="placeholder">Confirm Password</label>
        </div>
        <button className="submit">REGISTER</button>
      </form>
    </>
  );
};
