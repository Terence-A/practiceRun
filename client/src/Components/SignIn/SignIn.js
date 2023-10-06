import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signIn_wrapper">
      <form className="signInForm" action="">
        <h2>Sign In</h2>
        <div className="userEmail">
          <label htmlFor="">Email: </label>
          <input type="email" />
        </div>
        <div className="userPassword">
          <label htmlFor="">Password: </label>
          <input type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
