const SignupModel = require("../models/userlogin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = require("../utility/config");

// Signup function

exports.Signup = async (req, res) => {
  try {
     const { username, email, password, phone, iama } = req.body;

     const existingUserEmail = await SignupModel.findOne({ email: email });
     if (existingUserEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }

     const existingUserPhone = await SignupModel.findOne({ phone: phone });
    if (existingUserPhone) {
      return res.status(409).json({ message: "Phone no already exists" });
    }

     const salt = bcrypt.genSaltSync(15);
     const passwordHash = bcrypt.hashSync(password, salt);

     const createUser = await SignupModel.create({
        username,
        email,
        password: passwordHash,
        phone,
        iama
    });

      res
     .status(201)
      .json({ message: "User registered successfully", user: createUser });
  } catch (error) {
     console.log("Error:", error);
   }
 };


//  Login function


exports.login = async (req, res) => {
  try {
      const { email, password } = req.body;
  
      const existingUser = await SignupModel.findOne({ email: email });
  
      if (!existingUser) {
        return res.status(409).json({ message: "Email not found!" });
      }
  
      const checkPassword = bcrypt.compareSync(password, existingUser.password);
       if (!checkPassword) {
        return res.status(409).json({ message: "Password is wrong!" });
      }
  
      const token = jwt.sign({ _id: existingUser._id, email: existingUser.email }, JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
  
      res
        .status(200)
        .json({ message: "User login successfully", token, user: existingUser });
    } catch (error) {
      console.log("Error:", error);
    }
  };
