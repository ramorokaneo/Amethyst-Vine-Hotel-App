const router = require("express").Router();
const { Admin, validate } = require("../../models/admin");
const bcrypt = require("bcrypt");


router.post("/", async (req, res) => {
  console.log('admin.js line7 hero')
  try {
    const { error } = validate(req.body);
    console.log('admin.js line8 req.body:',req.body)
    if (error)
     return res.status(400).send({ message: error.details[0].message });
    console.log('admin.js line11 after if')

    const admin = await Admin.findOne({ email: req.body.email });
    console.log('admin.js line14 admin:' , admin)
    if (admin)
      return res
        .status(409)
        .send({ message: "Admin with given email already exist!" });
    console.log('admin.js line19 after if')

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    console.log('admin.js line22 SALT:', salt)
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log('admin.js line24 hashPassword:' , hashPassword)

    await new Admin({ ...req.body, password: hashPassword }).save();
    console.log('admin.js line27 new admin:')
    res.status(201).send({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
