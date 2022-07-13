  import passport from "passport";
import passportLocal from "passport-local";
const localStrategy = passportLocal.Strategy;
import bcrypt from "bcrypt";
import md5 from "md5";
import User from "./models/userModel.js";

 passport.use(new localStrategy({
    usernameField : "email"
 },
    (email, password, done) =>{
        User.findOne({
            where: {
                email : email
            }
        }).then(user =>{
         if(!user){
             console.log("user not found");
             return done(null, false ,{
                 message : "user not found"
             });
         }else{
             console.log("user found");
             console.log(user.prenom);
             const hashPassword = md5(password);

            if(!(hashPassword == user.password)){
                //return res.status(401).json({message:"mot de pass incorrect"});
                console.log("password incorrect");
               return done(null, false ,{
                        message : "incorrect password"
                      });
            }else{
                    console.log("password correct");
                    return done(null, user);
            }
                 

         }
        }).catch(error =>{
         return done(null, false, {
             message : error
         })
        })
    }
));
passport.serializeUser((user,done)=>{
    console.log("serial started");
    return done(null, user.id);
});

passport.deserializeUser((id,done)=>{
    User.findOne({
        where :{
            id : id
        }
    }).then(user =>{
       done(null, user);
    }).catch(error =>{
        console.log(error);
    })
})

export default passport;