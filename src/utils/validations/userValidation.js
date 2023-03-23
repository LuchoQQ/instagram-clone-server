const { check } = require("express-validator");
const { validateResult } = require("../validations/validateResult");

const userValidation = [
    check("username").isLength({ min: 5, max: 15 }).withMessage('must be between 5 and 15 chars long').optional(),
    check("firstName").isLength({ min: 3, max: 10 }).withMessage('must be between 3 and 10 chars long').optional(),
    check("lastName").isLength({ min: 3, max: 10 }).withMessage('must be between 3 and 10 chars long').optional(),
    check("email").isEmail().optional(),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];


module.exports = { userValidation };
