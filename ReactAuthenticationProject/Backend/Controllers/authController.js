const fs = require('fs');
const path = require('path');
const createToken = require('../Utils/createTokenHelper')
const GenerateOTP = require('../Utils/OtpGeneratorHelper.js')
const getHashedPassword = require('../Utils/PasswordHashHelper.js')
const bcrypt = require('bcrypt');

const usersPath = path.join(__dirname, "../Data/UserData.json");
const myMap = new Map()

function readUsers() {
  const data = fs.readFileSync(usersPath, 'utf-8');
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}

exports.signup = async (req, res) => {

  try {
    const { name, email, password, confirmpassword, role } = req.body;

    const errors = {}

    if (!name) errors.name = 'Name is required.';
    if (!email) errors.email = 'Email is required.';
    if (!password) errors.password = 'Password is required.';
    if (!confirmpassword) errors.confirmpassword = 'Confirm Password is required.';
    if (!role) errors.role = 'Role is required.';

    if (password !== confirmpassword) return res.status(401).json({ message: "password doesn't match" });

    // else if (!EmailRegex.test(email)) {
    //   errors.email = 'Enter a valid email address.';
    // }

    if (Object.keys(errors).length !== 0) return res.status(401).json({ errors });

    const users = readUsers();

    if (users.find(u => u.email === email)) {
      return res.status(404).json({ message: 'User already exists ' });
    }

    const hashedPassword = await getHashedPassword(password);
    console.log("P: ", hashedPassword)

    users.push({ name: name, email: email, password: hashedPassword, role: role });
    writeUsers(users);
    res.status(201).json({ message: 'Signup successful' });
  }
  catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Server Error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const errors = {}

    if (!email) errors.email = 'Email is required.';
    if (!password) errors.password = 'Password is required.';

    if (Object.keys(errors).length !== 0) return res.status(401).json({ errors });

    const users = readUsers();

    const user = users.find(u => u.email === email);

    if (!user) return res.status(404).json({ message: "User doesn't exist" });
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ message: "Incorrect Password" })

    const token = createToken(user)
    console.log("Token: ", token)
    res.status(201).json({ message: "Login Succesfull", token, user: { name: user.name, email: user.email, role: user.role } });
  }
  catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Server Error' });
  }

};

// exports.verify = (req, res) => {

//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "No token provided" });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).json({ message: "Invalid token" });
//     res.json({ user: decoded });
//   });
// };


exports.forgotpassword = (req, res) => {
  try {
    const { email } = req.body

    const errors = {}

    if (!email) errors.email = 'Email is required.';
    if (Object.keys(errors).length !== 0) return res.status(401).json({ errors });

    const users = readUsers();

    const user = users.find(u => u.email === email)
    if (!user) return res.status(401).json({ message: "User doesn't exist" });

    const otp = GenerateOTP()

    myMap.set(user.email, otp);
    console.log("MAP: ", myMap)

    return res.status(202).json({ message: "OTP Generated", otp: otp })
  }
  catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Server Error' });
  }

};

exports.verifyotp = (req, res) => {
  try {
    const { email, otp } = req.body

    const errors = {}
    if (!email) errors.email = 'Email is required.';
    if (!otp) errors.otp = "OTP is required."

    if (Object.keys(errors).length !== 0) return res.status(401).json({ errors });

    const users = readUsers();

    const user = users.find(u => u.email === email)
    if (!user) return res.status(401).json({ message: "User doesn't exist" });

    console.log("VERIFY MAP: ", myMap)
    const myotp = myMap.get(user.email)
    console.log("OTP E: ", otp)
    console.log("MYOTP: ", myotp)

    if (otp !== myotp) return res.status(401).json({ message: 'Wrong Otp' });

    return res.status(202).json({ message: `You can now change password` })
  }
  catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Server Error' });
  }

};

exports.changepassword = (req, res) => {
  try {
    const { password, email, otp } = req.body

    const errors = {}
    if (!email) errors.email = 'Email is required.';
    if (!password) errors.password = 'password is required.';
    if (!otp) errors.otp = "OTP is required."

    if (Object.keys(errors).length !== 0) return res.status(401).json({ errors });

    const users = readUsers();

    const user = users.find(u => u.email === email)
    if (!user) return res.status(401).json({ message: "User doesn't exist" });

    const myotp = myMap.get(user.email)

    if (myMap.size == 0) return res.status(401).json({ message: 'Generate the otp first' });
    if (otp !== myotp) return res.status(401).json({ message: 'Wrong Otp' });

    if (user) {
      const idx = users.indexOf(user);

      const newObj = Object.assign(user, { password: password })
      users[idx] = newObj;

      fs.writeFile('./Data/UserData.json', JSON.stringify(users), (err, data) => {

        if (err) return res.json({ success: false, message: "Error" })
        return res.json({ success: true, message: "Password updated successfully" })
      })
    }
  }
  catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Server Error' });
  }

};

exports.getusers = (req, res) => {
  try {
    const users = readUsers();
    if (!users) return res.status(401).json({ message: 'User not found' })
    return res.status(200).json({ users })
  }
  catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Server Error' });
  }
};

// exports.editusers = (req, res) => {
//   try {
//     // const users = readUsers();

//     // const user = users.find(u => u.email === req.user.email)
//     // if (!user) return res.status(401).json({ message: "User doesn't exist" });

//     // const role = user.role
//     // if (role === "user") return res.json({ success: false })

//     // const { name, email, newemail } = req.body

//     // if (!email) return res.status(401).json({ message: "Enter email of user you want to edit" });

//     // const newuser = users.find(u => u.email === email)
//     // if (!newuser) return res.status(401).json({ message: "User doesn't exist" });

//     // if (newuser) {
//     //   const idx = users.indexOf(newuser);

//     //   let newObj

//     //   if (name && !newemail) {
//     //     newObj = Object.assign(newuser, { name: name })
//     //   }

//     //   else if (newemail && !name) {
//     //     newObj = Object.assign(newuser, { email: newemail })
//     //   }
//     //   else {
//     //     newObj = Object.assign(newuser, { name: name, email: newemail })
//     //   }

//     //   users[idx] = newObj;

//     //   fs.writeFile('./Data/UserData.json', JSON.stringify(users), (err, data) => {
//     //     if (err) return res.json({ success: false, message: "Error" })
//     //     return res.json({ success: true, message: "Data updated successfully" })
//     //   })
//     }

//   catch (err) {
//     console.log(err)
//     return res.status(400).json({ message: 'Server Error' });
//   }
// };

exports.editusers = (req, res) => {
  const { email, name, newemail, role } = req.body;
  const users = readUsers()
  const requester = users.find(u => u.email === req.user.email);
  if (!requester) return res.status(401).json({ message: "Requesting user not found" });
  if (requester.role !== "admin") return res.status(403).json({ message: "Unauthorized" });

  const idx = users.findIndex(u => u.email === email);
  if (idx === -1) return res.status(404).json({ message: "User to edit not found" });

  users[idx].name = name || users[idx].name;
  users[idx].email = newemail || users[idx].email;
  users[idx].role = role || users[idx].role;

  writeUsers(users);
  return res.status(200).json({ success: true, message: "User updated", users });
};

// DELETE USER (admin only)
exports.deleteuser = (req, res) => {
  const emailToDelete = req.params.email;
  const users = readUsers();

  const requester = users.find(u => u.email === req.user.email); // ✅ the one making the request
  if (!requester) return res.status(401).json({ message: "Requesting user not found" });
  if (requester.role !== "admin") return res.status(403).json({ message: "Unauthorized" });

  const idx = users.findIndex(u => u.email === emailToDelete);
  if (idx === -1) return res.status(404).json({ message: "User to delete not found" });

  users.splice(idx, 1);
  writeUsers(users);
  return res.status(200).json({ success: true, message: "User deleted", users });
};



