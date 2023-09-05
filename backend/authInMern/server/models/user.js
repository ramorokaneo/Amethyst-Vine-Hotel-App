const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    surname: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "12d"});
    return token

};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        surname: Joi.string().require().label("Surname"),
        name: Joi.string().require().label("Name"),
        email: Joi.string().email().require().label("Email"),
        password: passwordComplexity().require().label("Password"),
    });
    return schema.validate(data)
};

module.exports = {User,validate};