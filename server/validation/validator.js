import { check, validationResult } from "express-validator";

export const validateRegister = [
   check('nom').notEmpty().withMessage('Le nom est requis'),
   check('prenom').notEmpty().withMessage('Le prenom est requis'),
   check('email').isEmail().withMessage('email valide est requis'),
   check('password').isLength({ min: 6 }).withMessage('Le mot de passe doit être au moins de 6 caractères')  
];

export const validateLogin = [
    check('email').isEmail().withMessage('email valide est requis'),
    check('password').isLength({ min: 6 }).withMessage('Le mot de passe doit être au moins de 6 caractères')  
 ];

export const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ message: errors.array()[0].msg });
    }
    next();

}