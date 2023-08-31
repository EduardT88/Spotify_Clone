import React, { useState } from "react";
import BaseModal from "./BaseModal";
import BaseButton from "./BaseButton";

const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'll implement the logic for authentication here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <BaseModal onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <BaseButton accent type="submit">
            Submit
          </BaseButton>
        </form>
      </div>
    </BaseModal>
  );
};

export default LoginPopup;
