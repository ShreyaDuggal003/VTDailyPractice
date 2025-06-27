import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = async () => {
    const res = await fetch('http://localhost:5000/api/forgotpassword', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.status === 202) {
      setInfo(data.otp);
      console.log("DATA OTP: ", data.otp)
      setStep(2);
    } else {
      setError(data.message || 'Something went wrong');
    }
  };

  const handleOtpSubmit = async () => {
    const res = await fetch('http://localhost:5000/api/verifyotp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (res.status === 202) {
      setInfo(data.message);
      setStep(3);
    } else {
      setError(data.message || 'Invalid OTP');
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      return setError("Passwords don't match");
    }

    const res = await fetch('http://localhost:5000/api/changepassword', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp, password: newPassword }),
    });
    const data = await res.json();
    if (data.success) {
      alert(data.message);
      navigate('/login');
    } else {
      setError(data.message || 'Failed to change password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-xl font-semibold mb-4 text-center">Forgot Password</h1>

      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />
          <button
            onClick={handleEmailSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Send OTP
          </button> <br/>
          <div className="flex justify-center items-center">
            {info && <p className="text-green-600 mb-2">{info}</p>}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />
          <button
            onClick={handleOtpSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Verify OTP
          </button>
          {console.log("OTP: ", info)}
        </>
      )}

      {step === 3 && (
        <>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />
          <button
            onClick={handleChangePassword}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Change Password
          </button> <br/> <br/>
          <div className="flex justify-center items-center">
            {info && <p className="text-green-600 mb-2">{info}</p>}
          </div>
        </>
      )}

      <br/> <br/>

      <div className="flex justify-center items-center">
            {error && <p className="text-red-500 mb-2">{error}</p>}
          </div>
      

    </div>
  );
};

export default ForgotPassword;