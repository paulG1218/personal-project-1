import { User, Climb, Shop } from "../model.js";

const authFunctions = {
    login: async (req, res) => {

        const {username, password} = req.body

        const user = await User.findOne({
            where: {
                username: username
            },
            include: [
                { 
                    model: Climb
                }
            ]
        })

        if(!user){
            res.json('No username found')
            return
        }

        if(user && user.password === password){
            req.session.user = user

            res.json({  
                message: 'Login successful', 
                userId: user.userId 
            })
            return
        }
        
        res.json('Password incorrect')
        
        
    },

    logout: async (req, res) => {
        req.session.destroy()
        res.json('Session terminated')
    },

    sessionCheck: async (req, res) => {
        if (req.session.user) {
            res.json({ user: req.session.user })
        } else {
            res.json("no user logged in")
        }
    },
}

export default authFunctions