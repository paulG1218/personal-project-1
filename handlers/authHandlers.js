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

        if (!user) {
            res.json({
                message: 'No username found',
                userId: ''
        })
            return
        } else if (user && user.password === password) {
            req.session.user = user

            res.json({
                message: 'Login successful', 
                userId: user.userId 
            })
            return

        }
        
        res.json({
            message: 'Password incorrect',
            userId: ''
        })
        return
        
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
    register: async (req, res) => {

        const {username, password} = req.body

        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if (user) {
            res.json({
                message: 'Username in use',
                userId: ''
        })
            return
        } else if (!user) {
            const newUser = User.create({
                username: username,
                password: password,
            })

            req.session.user = newUser

            res.json({
                message: 'Registered'
            })
            return

        }
    }
}

export default authFunctions