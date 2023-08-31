import React, { useState } from 'react';
import BaseModal from './BaseModal';
import BaseButton from './BaseButton';

const SignupPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Implement your error handling logic here
      console.log('Passwords do not match');
      return;
    }
    // Implement your sign-up logic here
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <BaseModal onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
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
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
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
          <div className="form-group mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <BaseButton primary type="submit">
            Sign Up
          </BaseButton>
        </form>
      </div>
    </BaseModal>
  );
};

export default SignupPopup;