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
            date:{
                type: DataTypes.DATEONLY,
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
            timestamps : false, 
        },
    );
    return model;
};

module.exports = Comment;