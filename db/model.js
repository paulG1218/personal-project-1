import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///project_db');

export class Climb extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Climb.init(
    {
        climbId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isBoulder: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
            default: true
        },
        title: {
            type: DataTypes.STRING(14),
            allowNull: false
        }
        
    },
    {
        modelName: 'climb',
        sequelize: db,
    }
)

export class Shop extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }

Shop.init(
    {
        itemId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        purchaseLink: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: false
        }

    },
    {
        modelName: 'shop',
        sequelize: db,
    }
)

export class User extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,

        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        modelName: 'user',
        sequelize: db,
    }
)

export class Like extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
}

Like.init(
    {
        likeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        modelName: 'like',
        sequelize: db,
    }
)

User.hasMany(Climb, {foreignKey: 'userId'})
Climb.belongsTo(User, {foreignKey: 'userId'})

User.hasMany(Like, {foreignKey: 'userId'})
Like.belongsTo(User, {foreignKey: 'userId'})

Climb.hasMany(Like, {foreignKey: 'climbId'})
Like.belongsTo(Climb, {foreignKey: 'climbId'})

