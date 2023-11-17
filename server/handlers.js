import { User, Climb, Shop, Like } from "../db/model.js";

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
            res.json({ 
                userId: req.session.user.userId,
                isAdmin: req.session.user.isAdmin,
                username: req.session.user.username
             })
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

        if (title.length > 14) {
            res.json({message: 'Title too long'})
            return
        }

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

        if (title.length > 14) {
            res.json({message: 'Title cannot be longer than 14 characters'})
            return
        }

        const climb = await Climb.findByPk(climbId)

        await climb.update({
            title: title,
            difficulty: difficulty,
            isBoulder: isBoulder,
            description: description,
            img: img,
            isPublic: isPublic
        })

        res.json({message: "Updated"})
    },

    deleteClimb: async (req, res) => {

        const {climbId} = req.params

        await Climb.destroy({
            where: {
                climbId: climbId
            }
        })

        res.json({message: 'Deleted'})
    },

    userProfile: async (req, res) => {
        const {userId} = req.params

        const user = await User.findByPk(userId)

        res.json({
            message: 'User found',
            user: user
        })
    },

    changeUserProfile: async (req, res) => {

        const {username, password} = req.body

        const {userId} = req.params

        const user = await User.findByPk(userId)

        const newUser = await user.update({
            username: username,
            password: password
        })

        res.json({message: 'Updated', user: newUser})
    },

    deleteUser: async (req, res) => {
        const {userId} = req.params

        await User.destroy({
            where: {
                userId: userId
            }
        })

        res.json('dead')

    },

    addNewAdmin: async (req, res) => {

        const {newAdmin} = req.body

        if(!newAdmin || newAdmin === '') {
            res.json({message: 'No username'})
            return
        }

        const user = await User.findOne({
            where: {
                username: newAdmin
            }
        })

        if (!user) {
            res.json({message: 'No user'})
            return
        }

        await user.update({
            isAdmin: true
        })

        res.json({message: 'Updated'})
        console.log('updated')
        return
    },

    createItem: async (req, res) => {

         const {title, description, price, purchaseLink, img} = req.body

        const existingItem = await Shop.findOne({
            where: {
                title: title
            }
        }) 

        if (existingItem) {
            res.json({
                message: 'Title taken'
            })
            return
        }

        await Shop.create({
            title: title,
            description: description,
            price: price,
            purchaseLink: purchaseLink,
            img: img
        })

        const item = await Shop.findOne({
            where: {
                title: title
            }
        })

        if(item) {
            res.json({
                message: 'Item created',
                item: item
            })
            return
        } 
        res.json({message: 'Error'})
        return
    },

    editItem: async (req, res) => {

        const {title, description, price, purchaseLink, img} = req.body

        const {itemId} = req.params

        const item = await Shop.findByPk(itemId)

        await item.update({
            title: title,
            description: description,
            price: price,
            purchaseLink: purchaseLink,
            img: img
        })

        res.json({message: 'Updated'})

    },
    
    deleteItem: async (req, res) => {
        const {itemId} = req.params

        await Shop.destroy({
            where: {
                itemId: itemId
            }
        })

        res.json({message: 'Deleted'})
    },

    getUserLikes: async (req, res) => {

        const allLikes = await Like.findAll()

        res.json({message: 'Success', likes: allLikes})
        return
    },
    
    addLike: async (req, res) => {
        const {climbId} = req.body

        const {userId} = req.session.userId

        await Like.create({
            userId: userId,
            climbId: climbId
        })

        res.json({message: 'Liked'})
    },

    getClimbLikes: async (req, res) => {
        const {climbId} = req.params

        const climbLikes = await Like.findAll({
            where: {
                climbId: climbId
            }
        })

        res.json(climbLikes)
    }
}

export default authFunctions