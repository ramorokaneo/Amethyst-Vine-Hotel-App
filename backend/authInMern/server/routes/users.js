const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");


router.post("/", async (req, res) => {
  console.log('user.js line7 hero')
  try {
    const { error } = validate(req.body);
    console.log('user.js line8 req.body:',req.body)
    if (error)
     return res.status(400).send({ message: error.details[0].message });
    console.log('user.js line11 after if')

    const user = await User.findOne({ email: req.body.email });
    console.log('user.js line14 user:' , user)
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already exist!" });
    console.log('user.js line19 after if')

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    console.log('user.js line22 SALT:', salt)
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log('user.js line24 hashPassword:' , hashPassword)

    await new User({ ...req.body, password: hashPassword }).save();
    console.log('user.js line27 new User:')
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
