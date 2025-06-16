import React, { useState } from 'react';

const SignUp = () => {
  console.log("sign Up ")
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState([]);
  const [showTable, setShowTable] = useState(false);

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
        email: '',
        password: '',
        cpassword: ''
      });
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Sign Up page</h1>
      <form>
        <label htmlFor="fname">Firstname: </label>
        <input type="text" id="fname" placeholder="Firstname" value={form.fname} onChange={handleChange} />
        <br />
        <span style={{ color: 'red' }}>{errors.fname}</span><br /><br />

        <label htmlFor="lname">Lastname: </label>
        <input type="text" id="lname" placeholder="Lastname" value={form.lname} onChange={handleChange} />
        <br />
        <span style={{ color: 'red' }}>{errors.lname}</span><br /><br />

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
        <button type="button" onClick={() => setShowTable(true)}>Show Table</button>
      </form>

      {showTable && formData.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h2>Submitted Data</h2>
          <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <td>{data.fname}</td>
                  <td>{data.lname}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SignUp;
