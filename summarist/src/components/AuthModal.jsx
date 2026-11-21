function AuthModal({onClose}) {


  return (
      <div className="auth__overlay">
        <div className="auth__modal">
        <button className="auth__close" onClick={onClose}>×</button>
          <h2>Log in to Summarist</h2>
        </div>
      </div>
  );
}

export default AuthModal;
