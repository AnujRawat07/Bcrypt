// Bcrypt is used for encryption and decryption purpose 
// to save our password in a form no one  can guess it what the pasword is ?v
// to use bcrypt 
// step 1 : npm i bcrypt and require it ;
// step 2 : so we need to create a salt for the password salt is a random string thaat mixes with the password
// step 3 : now hashing the password 
//  step 4 : we can hash password by making await and async and then in single line we can hash and gensalt also

// step 5 : now we need to compare the (password we written ,  the encrypt passwrd store in db)
// step 6 : it will return the true and false value 


const express=require('express');
const app=express();
const bcrypt=require('bcrypt');

app.get('/',async(req,res)=>{

    // ENCRYPTION
    // bcrypt.genSalt(10,(err,salt)=>{
    //     bcrypt.hash("passwordcomeshere",salt,(err,hash)=>{
    //         console.log("hashed password is : ",hash);
    //     })
    // })
    //OR
    // console.log(await bcrypt.hash("password",10));    //password => $2b$10$TFPRSVZJDCnwFXcKAEr0Au7ZGRaDwaoQnBFnna.uf5F08wqeyriJi


    // DECRYPTION
    const result = await bcrypt.compare('password',"$2b$10$TFPRSVZJDCnwFXcKAEr0Au7ZGRaDwaoQnBFnna.uf5F08wqeyriJi")
    console.log(result);
})

app.listen(4000,()=>{
    console.log("server starts");
})