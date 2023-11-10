import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';
import authFunctions from '../server/handlers.js';

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
        video: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
            default: true
        },
        title: {
            type: DataTypes.STRING,
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
            allowNull: false
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

User.hasMany(Climb, {foreignKey: 'userId'})
Climb.belongsTo(User, {foreignKey: 'userId'})

