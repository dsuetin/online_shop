const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Role = sequelize.define(
    "role", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: 'role id',
      },
      name: {
        type: DataTypes.STRING,
        unique: true
      }
    }
);

const User = sequelize.define(
    'user', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING, unique: true},
        password: {type: DataTypes.STRING},
        // role: {type: DataTypes.STRING, defaultValue: "USER"},
        user_roles: {type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: ["USER"]}
    }
)

const Basket = sequelize.define(
    'basket', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    }
)

const BasketDevice = sequelize.define(
    'basket_device', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    }
)

const Device = sequelize.define(
    'device', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type:DataTypes.STRING, unique: true, allowNull: false},
        price: {type:DataTypes.INTEGER, allowNull: false},
        rating: {type:DataTypes.INTEGER, defaultValue: 0},
        img: {type:DataTypes.STRING, allowNull: false},
        // class: {type:DataTypes.STRING, defaultValue: "All"},
    }
)

const Type = sequelize.define(
    'type', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type:DataTypes.STRING, unique: true, allowNull: false},
    }
)

// const BikeClass = sequelize.define(
//     'bike_class', {
//         id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//         name: {type:DataTypes.STRING, unique: true, allowNull: false},
//     }
// )

const Brand = sequelize.define(
    'brand', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type:DataTypes.STRING, unique: true, allowNull: false},
    }
)

const Rating = sequelize.define(
    'rating', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        rate: {type:DataTypes.INTEGER, allowNull: false},
    }
)

const DeviceInfo = sequelize.define(
    'device_info', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type:DataTypes.STRING, allowNull: false},
        description: {type:DataTypes.STRING, allowNull: false},
    }
)

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// const TypeBikeClass = sequelize.define('type_bike_class', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })
//
// const BrandBikeClass = sequelize.define('brand_bike_class', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type )

// BikeClass.hasMany(Device)
// Device.belongsTo(BikeClass)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

// Type.belongsToMany(BikeClass, {through: TypeBikeClass})
// BikeClass.belongsToMany(Type, {through: TypeBikeClass})
//
// Brand.belongsToMany(BikeClass, {through: BrandBikeClass})
// BikeClass.belongsToMany(Brand, {through: BrandBikeClass})

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    Role,
    TypeBrand,
    // TypeBikeClass,
    // BrandBikeClass,
    DeviceInfo
}

// Neutron939udd@