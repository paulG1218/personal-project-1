import React from "react";
import { useState } from "react";

const RegisterForm = ({ onRegister }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onRegister(e, {
          username: newUsername,
          password: newPassword,
        });
      }}
    >
      <label htmlFor="username">Username:</label>
      <input
        name="username"
        id="username"
        type="text"
        required
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        id="password"
        type="password"
        required
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <label htmlFor="confirmPassword">Confirm password:</label>
      <input
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {(newPassword !== confirmPassword ||
        newPassword === "" ||
        confirmPassword === "") && <button disabled>Register</button>}

      {newPassword === confirmPassword && newPassword !== "" && (
        <button type="submit">Register</button>
      )}
    </form>
  );
};

export default RegisterForm;
