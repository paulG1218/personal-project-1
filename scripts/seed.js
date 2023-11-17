import {Climb, User, Shop, db} from '../db/model.js'
import climbData from './data/climbs.json' assert {type: 'json'}
import shopData from './data/shop.json' assert {type: 'json'}
import userData from './data/users.json' assert {type: 'json'}

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');


console.log('Creating shop items...')
const shopInDB = await Promise.all(
  shopData.map((item) => {
    const {title, description, price, purchaseLink} = item
    
    const newShop = Shop.create({
      title: title,
      description: description,
      price: price,
      purchaseLink: purchaseLink
    })
    return newShop
  })
  )
  
  console.log('Creating users...')
  const usersInDB = await Promise.all(
    userData.map((user) => {
      const {username, password, isAdmin} = user
      const newUser = User.create({
        username: username,
        password: password,
        isAdmin: isAdmin
      })
      return newUser
    })
    
    )

    console.log('Creating climbs...');
    const climbsInDB = await Promise.all(
      climbData.map((climb) => {
        const date = new Date(Date.parse(climb.date));
        const { title, description, difficulty, isBoulder, isPublic, img, userId } = climb;
    
        const newClimb = Climb.create({
          title: title,
          description: description,
          difficulty: difficulty,
          isBoulder: isBoulder,
          isPublic: isPublic,
          date: date,
          img: img,
          userId: userId
        });
    
        return newClimb;
      }),
    );
    
    await db.close();
    console.log('Finished seeding database!');
    