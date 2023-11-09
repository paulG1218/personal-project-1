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
            console.log(req.session.user.userId)
            res.json({ userId: req.session.user.userId })
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
            const newUser = await User.create({
                username: username,
                password: password,
            })

            req.session.user = newUser

            res.json({
                message: 'Registered',
                userId: newUser.userId
            })
            return

        }
    },

    createClimb: async (req, res) => {

        const {title, difficulty, isBoulder, description, img, isPublic, userId} = req.body

        const climb = await Climb.findOne({
            where: {
                title: title
            }
        })

        if (climb) {
            res.json({message: 'Title taken'})
            return
        }

        await Climb.create({
            title: title,
            difficulty: difficulty,
            isBoulder: isBoulder,
            description: description,
            img: img,
            isPublic: isPublic,
            userId: userId,
            date: new Date()
        })

        const newClimb = await Climb.findOne({
            where: {
                title: title
            }
        })

        res.json({
            message: 'Climb created',
            climb: newClimb
        })
        console.log(newClimb)

        return
    },

    editClimb: async (req, res) => {

        const {title, difficulty, isBoulder, description, img, isPublic} = req.body
        const {climbId} = req.params

        console.log(title, climbId)

        const climb = await Climb.findByPk(climbId)

        await climb.update({
            title: title,
            difficulty: difficulty,
            isBoulder: isBoulder,
            description: description,
            img: img,
            isPublic: isPublic
        })

        console.log(climb)

        res.json({message: "Updated"})
    }
}

export default authFunctions