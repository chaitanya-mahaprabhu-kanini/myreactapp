import React, { useState, useEffect } from 'react';
import './FormValidation.css';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      // Form is valid, perform form submission logic here
      console.log('Form submitted');
    }
  };

  useEffect(() => {
    const newErrors = {};

    // Name validation
    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    if (password === '') {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
    }

    setErrors(newErrors);

  }, [errors, name, email, password]);

  return (
    <div class = "encom">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
