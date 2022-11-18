const User = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'user',
        {
            id:{
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            userID:{
                type : DataTypes.STRING(20),
                allowNull : false,
                unique : true,
            },
            userPW:{
                type : DataTypes.STRING(100),
                allowNull : false,
            },
            name:{
                type : DataTypes.STRING(10),
                allowNull : false,
            },
            birth:{
                type : DataTypes.DATEONLY,
                allowNull : true,
            },
            profile_img:{
                type : DataTypes.BLOB,
                allowNull : true,
            }
        },
        {
            tableName : 'user',
            freezeTableName : true,
            timestamps : false, 
        },
    );
    return model;
};

module.exports = User;