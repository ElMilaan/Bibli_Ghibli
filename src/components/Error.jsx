const Error = ({ error }) => {
  return (
    <div className="error-container bg">
      <h1 className="error-title">Error</h1>
      <p className="error-text">{error}</p>
    </div>
  );
};

export default Error;
