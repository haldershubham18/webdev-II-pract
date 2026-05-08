import { useState } from 'react'

function form() {
  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div className="container">
      <h2>Form Handling t</h2>

      <div className="form-box">
        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="name"
        />
      </div>

      <div className="output-box">
        {name ? (
          <p>Hello, <strong>{name}</strong>!</p>
        ) : (
          <p className="placeholder-text">your name</p>
        )}
      </div>
    </div>
  )
}

export default form
