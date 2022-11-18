const Likes = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'likes',
        {
            id:{
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            post_id:{
                type: DataTypes.INTEGER,
                allowNull : false,
            },
            user_id:{
                type: DataTypes.INTEGER,
                allowNull : false,
            },
        },
        {
            tableName : 'likes',
            freezeTableName : true,
            timestamps : false, 
        },
    );
    return model;
};

module.exports = Likes;