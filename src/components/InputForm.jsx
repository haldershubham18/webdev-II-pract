export default function InputForm({ value, onChange }) {
  return (
    <div className="input-form">
      <label htmlFor="name-input">Enter your name:</label>
      <input
        id="name-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type something..."
        className="text-input"
      />
    </div>
  );
}
