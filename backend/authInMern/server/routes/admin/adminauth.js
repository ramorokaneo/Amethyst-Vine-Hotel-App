const router = require("express").Router();
const { Admin } = require("../../models/admin");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const admin = await Admin.findOne({ employeeNumber: req.body.employeeNumber });
    if (!admin)
      return res.status(401).send({ message: "Invalid Employee Number or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Employee Number or Password" });

    const token = admin.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    employeeNumber: Joi.string().required().regex(/^AVH\d{4}$/).label("Employee Number"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
