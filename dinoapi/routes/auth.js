const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js"); // npm for password encryption
const jwt = require("jsonwebtoken"); // webtoken for client

//REGISTER user sending us information to create account, async
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN findOne going to find unique username

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Ah ah ah, you didn't say the magic word."); // if wrong username

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OgPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    OgPassword !== req.body.password &&
      res.status(401).json("Ah ah ah, you didn't say the magic word."); // if wrong password

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc; //Mongo stores the info in the doc file, displays the other/s info instead of password when posting
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
