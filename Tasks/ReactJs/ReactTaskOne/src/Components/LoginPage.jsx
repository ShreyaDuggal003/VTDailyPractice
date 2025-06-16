import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    contact: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState([]);
  const [userSignUp, setUserSignUp] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const isEmail = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const isPasswordValid = (password) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);

  const validate = () => {
    const newErrors = {};
    const { fname, lname, contact, email, password, cpassword } = form;

    if (!fname) newErrors.fname = "*This field can't remain empty";
    else if (fname.length < 3) newErrors.fname = "Firstname can't be less than 3 characters";

    if (!lname) newErrors.lname = "*This field can't remain empty";
    else if (lname.length < 3) newErrors.lname = "Lastname can't be less than 3 characters";

    if (!contact) newErrors.contact = "*This field can't remain empty";
    else if (contact.length !== 10) newErrors.contact = "*Enter number of length 10";

    if (!email) newErrors.email = "*This field can't remain empty";
    else if (!isEmail(email)) newErrors.email = "*Enter valid email";

    if (!password) newErrors.password = "*This field can't remain empty";
    else if (!isPasswordValid(password)) {
      newErrors.password = "Password must be 6-20 chars with uppercase, lowercase, and digit";
    }

    if (!cpassword) newErrors.cpassword = "*This field can't remain empty";
    else if (password && cpassword && password !== cpassword) {
      newErrors.password = "*Password doesn't match";
      newErrors.cpassword = "*Password doesn't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setFormData([...formData, { ...form }]);
      alert('Form submitted successfully!');
      setForm({
        fname: '',
        lname: '',
        contact: '',
        email: '',
        password: '',
        cpassword: ''
      });
      setErrors({});
    }
  };


  return (
    <div>

      <h1>Login page</h1>
      <form>

        <label htmlFor="email">Email: </label>
        <input type="text" id="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <br />
        <span style={{ color: 'red' }}>{errors.email}</span><br /><br />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <br />
        <span style={{ color: 'red' }}>{errors.password}</span><br /><br />

        <label htmlFor="cpassword">Confirm Password: </label>
        <input type="password" id="cpassword" placeholder="Confirm Password" value={form.cpassword} onChange={handleChange} />
        <br />
        <span style={{ color: 'red' }}>{errors.cpassword}</span><br /><br />

        <button type="button" onClick={handleSubmit}>Submit</button>{' '}
        <button type="button" onClick={() => navigate('/signup')}>SignUp</button>
      </form>

    </div>
  );
};

export default UserLogin;
