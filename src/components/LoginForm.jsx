import { useState } from 'react';

export default function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('')   
    const [password, setPassword] = useState('')

  return (
    <form
      onSubmit={(e) => {
        onLogin(e, {
          username: username,
          password: password,
        })
      }}
    >
      <label htmlFor="username">Username:</label>
      <input
        name="username"
        id="username"
        type="text"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        id="password"
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  )
}