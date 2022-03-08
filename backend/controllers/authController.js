const User = require('../Models/User');
const bcrypt = require('bcrypt');

//handle err 
const handleErrors =(err)=>{
console.log(err.message, err.code);
let errors={email:'',password:''}

if(err.message.includes('user validation failed')){
  Object.values(err.errors).forEach(({properties})=>{
    errors[properties.path]=properties.message;
  });
}
return errors;
}
module.exports.signup_post =async({name,email,pass,nationality,organisation,role},res)=>{
    try{
     
     const salt = await bcrypt.genSalt(10)
      const password = pass
      const user=await User.create({name,email,password,nationality,organisation,role});
      return user
    
    }
    catch(err){
       handleErrors(err);
      // res.status(400).json({err});
    }
}
module.exports.login_post =async({email,pass})=>{
  try {
    const salt = await bcrypt.genSalt(10)
    const password = pass
    console.log({ email, password })
    let result= await User.findOne({email,password})
    console.log(result)
    return result
} catch (err) {
  handleErrors(err);
}
}