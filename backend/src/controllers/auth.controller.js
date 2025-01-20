import User from '../models/user.model.js'
import bcrypt from "bcryptjs"

export const signup = async (req,res) =>{
    const{fullName,email,password}  = req.body
    try {
        if(password.length < 6){
            return res.status(400).json({message: "password must be atleast 6 characters"})
        }

        const user = await User.findOne({email})
        if(user) return res.status(400).json({message: "user already exists"})

        //hash pw
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            fullName,
            email,
            password:hashedPassword,
        })

        if(newUser){
            //generate jwt
            

        }else{
            return res.status(400).json({message: "invalid user data"})
            
        }

    } catch (error) {
        
    }
}

export const login = (req,res) =>{
    
}

export const logout = (req,res) =>{
    
}