import { useState } from "react";

function AuthModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (password.length < 6) {
      alert("Password is too short!");
      return;
    }

    console.log(email);
  }

  return (
    <div className="auth__overlay">
      <div className="auth__modal">
        <button className="auth__close" onClick={onClose}>
          ×
        </button>
        <h2>{isSignUp ? "Create an account" : "Log in to Summarist."}</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="auth__input"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="auth__input"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <button type="submit" className="auth__submit">
            {isSignUp ? "Sign up" : "Log in"}
          </button>
        </form>
        <p className="auth__switch">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}

          <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
