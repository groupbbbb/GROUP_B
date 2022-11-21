const Comment = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'comment',
        {
            id:{
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            content:{
                type : DataTypes.STRING(1000),
                allowNull : false,
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
            tableName : 'comment',
            freezeTableName : true,
            timestamps : true,
            createdAt: "createdAt",
            updatedAt: 'updatedAt',
        },
    );
    return model;

};

module.exports = Comment;