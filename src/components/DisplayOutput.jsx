export default function DisplayOutput({ name }) {
  return (
    <div className="display-output">
      {name ? (
        <p className="greeting">Hello, {name}!</p>
      ) : (
        <p className="placeholder">Start typing your name above...</p>
      )}
    </div>
  );
}
